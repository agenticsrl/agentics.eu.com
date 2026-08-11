import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollableX from './layout/ScrollableX';

/**
 * Palette del cruscotto d'esempio: fondo bianco e dettagli neri, incorniciato
 * dal bordo scuro della pagina. Resta monocromatica come il resto del sito.
 */
const IMPREDO = {
  accent: '#0A0A0A',
  bg: '#FFFFFF',
  cardBg: '#FFFFFF',
  /* Filetti, griglia dei grafici e binario delle barre di avanzamento: deve
     restare più chiaro di ogni grigio della rampa, o le barre spariscono. */
  border: '#E5E5E5',
  /* Ruolo dato, non filetto: la serie "in corso" accanto alle barre nere.
     Serve più contrasto di un filetto per restare leggibile sul bianco. */
  dataMuted: '#C9C9C9',
  textPrimary: '#0A0A0A',
  textSecondary: '#525252',
  textMuted: '#737373',
};

const generateSalesData = (variation: number) => [
  { date: 'Gen', vendite: 42000 + variation * 800, obiettivo: 38000 },
  { date: 'Feb', vendite: 48500 + variation * 900, obiettivo: 42000 },
  { date: 'Mar', vendite: 51200 + variation * 700, obiettivo: 45000 },
  { date: 'Apr', vendite: 47800 + variation * 1000, obiettivo: 48000 },
  { date: 'Mag', vendite: 56300 + variation * 850, obiettivo: 52000 },
  { date: 'Giu', vendite: 61200 + variation * 950, obiettivo: 55000 },
  { date: 'Lug', vendite: 58900 + variation * 750, obiettivo: 58000 },
  { date: 'Ago', vendite: 52400 + variation * 600, obiettivo: 50000 },
  { date: 'Set', vendite: 67800 + variation * 1100, obiettivo: 62000 },
];

const generateProductivityData = (variation: number) => [
  { name: 'Lun', completati: 24 + Math.floor(variation * 0.5), inCorso: 8 },
  { name: 'Mar', completati: 31 + Math.floor(variation * 0.3), inCorso: 12 },
  { name: 'Mer', completati: 28 + Math.floor(variation * 0.4), inCorso: 9 },
  { name: 'Gio', completati: 35 + Math.floor(variation * 0.6), inCorso: 7 },
  { name: 'Ven', completati: 42 + Math.floor(variation * 0.2), inCorso: 11 },
  { name: 'Sab', completati: 18 + Math.floor(variation * 0.3), inCorso: 4 },
  { name: 'Dom', completati: 8 + Math.floor(variation * 0.1), inCorso: 2 },
];

/* Grigi in ordine di rilievo: la prima voce è la più marcata. */
const taskCategories = [
  { category: 'Ordini Elaborati', count: 156, color: '#0A0A0A' },
  { category: 'Preventivi Inviati', count: 89, color: '#454545' },
  { category: 'Fatture Generate', count: 67, color: '#7A7A7A' },
  { category: 'Email Gestite', count: 234, color: '#ABABAB' },
];

/* Le barre di avanzamento sono in scala sul valore più alto dell'elenco. */
const MAX_TASK_COUNT = Math.max(...taskCategories.map((item) => item.count));

const formatCurrency = (value: number) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
};

/**
 * Valore numerico statico e formattato.
 * Sostituisce il contatore che si incrementava all'ingresso: i numeri
 * vengono mostrati subito nel loro valore finale.
 */
const StaticNumber: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}> = ({ value, suffix = '', prefix = '', decimals = 0 }) => {
  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
};

/* Dati del cruscotto: valori fissi, nessuna variazione nel tempo. */
const SALES_VARIATION = 0;
const CURRENT_SALES = 67.8;
const TARGET_CLIENTS = 847;
const TARGET_ORDERS = 1243;

const ConstructionDemo: React.FC = () => {
  const { language } = useLanguage();

  const currentSales = CURRENT_SALES;
  const targetClients = TARGET_CLIENTS;
  const targetOrders = TARGET_ORDERS;

  const salesData = useMemo(() => generateSalesData(SALES_VARIATION), []);
  const productivityData = useMemo(() => generateProductivityData(SALES_VARIATION), []);

  const translatedSalesData = useMemo(() => {
    if (language === 'en') {
      return salesData.map(item => ({
        ...item,
        date: item.date
          .replace('Gen', 'Jan')
          .replace('Feb', 'Feb')
          .replace('Mar', 'Mar')
          .replace('Apr', 'Apr')
          .replace('Mag', 'May')
          .replace('Giu', 'Jun')
          .replace('Lug', 'Jul')
          .replace('Ago', 'Aug')
          .replace('Set', 'Sep')
      }));
    }
    return salesData;
  }, [language, salesData]);

  const translatedProductivityData = useMemo(() => {
    if (language === 'en') {
      return productivityData.map(item => ({
        ...item,
        name: item.name
          .replace('Lun', 'Mon')
          .replace('Mar', 'Tue')
          .replace('Mer', 'Wed')
          .replace('Gio', 'Thu')
          .replace('Ven', 'Fri')
          .replace('Sab', 'Sat')
          .replace('Dom', 'Sun')
      }));
    }
    return productivityData;
  }, [language, productivityData]);

  const totalTasks = useMemo(() => {
    return productivityData.reduce((sum, d) => sum + d.completati, 0);
  }, [productivityData]);

  return (
    /* Il cruscotto ha una larghezza minima propria: scorre nel suo
       contenitore invece di essere rimpicciolito con una scala. Su telefono
       resta fuori vista quasi due terzi, quindi serve dirlo. */
    <ScrollableX
      label={language === 'it' ? 'Dashboard operativa' : 'Operations dashboard'}
      className="w-full border border-line"
      fadeFrom="from-white"
    >
      <div className="min-w-[900px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div style={{ background: IMPREDO.bg }}>
        {/* Top bar */}
        <div
          className="px-6 py-3 flex items-center justify-between gap-2"
          style={{ borderBottom: `1px solid ${IMPREDO.border}` }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-3" style={{ color: IMPREDO.textSecondary, fontSize: 11 }}>
              <div
                className="w-1.5 h-1.5 flex-shrink-0"
                style={{ background: IMPREDO.accent }}
              />
              <span
                className="font-semibold tracking-[.08em] uppercase truncate"
                style={{ color: IMPREDO.textPrimary, fontSize: 11 }}
              >
                {language === 'it' ? 'Gestionale Aziendale' : 'Business Management'}
              </span>
              <span

                className="text-[10px] font-semibold uppercase tracking-[.08em] px-2 py-0.5 flex-shrink-0"
                style={{
                  color: IMPREDO.accent,
                  background: 'rgba(10, 10, 10, 0.05)',
                  border: `1px solid rgba(10, 10, 10, 0.18)`,
                }}
              >
                {language === 'it' ? 'AI Assistito' : 'AI Assisted'}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6" style={{ borderBottom: `1px solid ${IMPREDO.border}`, paddingBottom: 16 }}>
            <div>
              <h2
                className="font-semibold uppercase tracking-[.06em]"
                style={{ color: IMPREDO.textPrimary, fontSize: 15, letterSpacing: '0.06em' }}
              >
                {language === 'it' ? 'Dashboard Operativa' : 'Operations Dashboard'}
              </h2>
              <p
                className="uppercase tracking-[.08em] font-semibold mt-1"
                style={{ color: IMPREDO.textSecondary, fontSize: 11 }}
              >
                {language === 'it' ? 'Monitoraggio in tempo reale' : 'Real-time monitoring'}
              </p>
            </div>
          </div>

          {/* Main grid: Revenue chart + Automated tasks */}
          <div className="grid grid-cols-3 gap-0 mb-0">
            {/* Revenue chart */}
            <div
              className="col-span-2 p-5 relative overflow-hidden"
              style={{ background: IMPREDO.cardBg, borderRight: `1px solid ${IMPREDO.border}`, borderTop: `1px solid ${IMPREDO.border}` }}
            >
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div>
                  <p
                    className="uppercase tracking-[.08em] font-semibold mb-1"
                    style={{ color: IMPREDO.textSecondary, fontSize: 11 }}
                  >
                    {language === 'it' ? 'Fatturato Mensile' : 'Monthly Revenue'}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span
                        key={Math.floor(currentSales * 10)}

                        className="font-light tracking-tight"
                        style={{ color: IMPREDO.textPrimary, fontSize: 32 }}
                      >
                        {currentSales.toFixed(1)}K
                      </span>
                    <span

                      className="font-semibold uppercase tracking-[.06em]"
                      style={{ color: IMPREDO.accent, fontSize: 12 }}
                    >
                      +12.4%
                    </span>
                  </div>
                  <p
                    className="mt-1 uppercase tracking-[.06em]"
                    style={{ color: IMPREDO.textMuted, fontSize: 10 }}
                  >
                    {language === 'it' ? 'vs mese precedente' : 'vs previous month'} (60.3K)
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="uppercase tracking-[.08em] font-semibold mb-1"
                    style={{ color: IMPREDO.textMuted, fontSize: 10 }}
                  >
                    {language === 'it' ? 'Obiettivo Q4' : 'Q4 Target'}
                  </p>
                  <p className="font-medium" style={{ color: IMPREDO.textPrimary, fontSize: 18 }}>85K</p>
                  <p
                    className="uppercase tracking-[.06em] font-semibold"
                    style={{ color: IMPREDO.accent, fontSize: 10, opacity: 0.7 }}
                  >
                    {language === 'it' ? 'in linea' : 'on track'}
                  </p>
                </div>
              </div>
              <div className="h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={translatedSalesData}>
                    <defs>
                      <linearGradient id="salesGradientImpredo" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={IMPREDO.accent} stopOpacity={0.2} />
                        <stop offset="50%" stopColor={IMPREDO.accent} stopOpacity={0.06} />
                        <stop offset="100%" stopColor={IMPREDO.accent} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={IMPREDO.border} vertical={false} />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: IMPREDO.textMuted, fontSize: 10, fontFamily: 'Montserrat', fontWeight: 600 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: IMPREDO.textMuted, fontSize: 10, fontFamily: 'Montserrat', fontWeight: 600 }}
                      tickFormatter={(value) => `${value / 1000}K`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: IMPREDO.cardBg,
                        border: `1px solid ${IMPREDO.accent}`,
                        borderRadius: 0,
                        fontSize: 11,
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.06em',
                      }}
                      labelStyle={{ color: IMPREDO.textSecondary }}
                      formatter={(value: number, name: string) => [
                        `${formatCurrency(value)}`,
                        name === 'vendite' ? (language === 'it' ? 'Vendite' : 'Sales') : (language === 'it' ? 'Obiettivo' : 'Target')
                      ]}
                    />
                    <Area isAnimationActive={false}
                      type="monotone"
                      dataKey="obiettivo"
                      stroke={IMPREDO.textMuted}
                      strokeWidth={1}
                      fill="transparent"
                      strokeDasharray="4 4"
                    />
                    <Area isAnimationActive={false}
                      type="monotone"
                      dataKey="vendite"
                      stroke={IMPREDO.accent}
                      strokeWidth={2}
                      fill="url(#salesGradientImpredo)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Automated tasks */}
            <div
              className="p-5 relative overflow-hidden"
              style={{ background: IMPREDO.cardBg, borderTop: `1px solid ${IMPREDO.border}` }}
            >
              <p
                className="uppercase tracking-[.08em] font-semibold mb-1"
                style={{ color: IMPREDO.textSecondary, fontSize: 11 }}
              >
                {language === 'it' ? 'Attività Automatizzate' : 'Automated Tasks'}
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-light tracking-tight" style={{ color: IMPREDO.textPrimary, fontSize: 32 }}>
                  <StaticNumber value={546} />
                </span>
                <span
                  className="uppercase tracking-[.08em] font-semibold"
                  style={{ color: IMPREDO.textSecondary, fontSize: 10 }}
                >
                  {language === 'it' ? 'oggi' : 'today'}
                </span>
              </div>
              <div className="space-y-3">
                {taskCategories.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span
                        className="uppercase tracking-[.06em] font-semibold"
                        style={{ color: IMPREDO.textSecondary, fontSize: 10 }}
                      >
                        {language === 'en' ? item.category.replace('Ordini Elaborati', 'Orders Processed').replace('Preventivi Inviati', 'Quotes Sent').replace('Fatture Generate', 'Invoices Generated').replace('Email Gestite', 'Emails Handled') : item.category}
                      </span>
                      <span
                        className="font-semibold tabular-nums"
                        style={{ color: IMPREDO.textPrimary, fontSize: 11 }}
                      >
                        {item.count}
                      </span>
                    </div>
                    <div className="h-1" style={{ background: IMPREDO.border }}>
                      <div
                        className="h-full"
                        style={{
                          backgroundColor: item.color,
                          width: `${(item.count / MAX_TASK_COUNT) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-4 gap-0 mb-0">
            {[
              {
                label: language === 'it' ? 'Clienti Attivi' : 'Active Clients',
                value: targetClients,
                suffix: '',
                sub: `+23 ${language === 'it' ? 'questo mese' : 'this month'}`
              },
              {
                label: language === 'it' ? 'Ordini Totali' : 'Total Orders',
                value: targetOrders,
                suffix: '',
                sub: `+8.2% ${language === 'it' ? 'vs scorso mese' : 'vs last month'}`
              },
              {
                label: language === 'it' ? 'Tasso Conversione' : 'Conversion Rate',
                value: 34.8,
                suffix: '%',
                sub: language === 'it' ? 'da lead a cliente' : 'lead to client',
                isDecimal: true
              },
              {
                label: language === 'it' ? 'Tempo Risposta' : 'Response Time',
                value: 2.4,
                suffix: 'min',
                sub: language === 'it' ? 'media assistita' : 'AI-assisted avg.',
                isDecimal: true
              }
            ].map((stat, index) => (
              <div
                key={index}

                className="p-5 transition-colors duration-300"
                style={{
                  background: IMPREDO.cardBg,
                  borderTop: `1px solid ${IMPREDO.border}`,
                  borderRight: index < 3 ? `1px solid ${IMPREDO.border}` : 'none',
                }}
              >
                <p
                  className="uppercase tracking-[.08em] font-semibold mb-2"
                  style={{ color: IMPREDO.textSecondary, fontSize: 11 }}
                >
                  {stat.label}
                </p>
                <p className="font-light tracking-tight" style={{ color: IMPREDO.textPrimary, fontSize: 22 }}>
                  {stat.isDecimal ? (
                    <>{stat.value}<span style={{ color: IMPREDO.textSecondary, fontSize: 14 }}>{stat.suffix}</span></>
                  ) : (
                    <StaticNumber value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p
                  className="mt-1 uppercase tracking-[.06em] font-medium"
                  style={{ color: IMPREDO.textMuted, fontSize: 10 }}
                >
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Weekly tasks bar chart */}
          <div
            className="p-5 relative overflow-hidden"
            style={{ background: IMPREDO.cardBg, borderTop: `1px solid ${IMPREDO.border}` }}
          >
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div>
                <p
                  className="uppercase tracking-[.08em] font-semibold mb-1"
                  style={{ color: IMPREDO.textSecondary, fontSize: 11 }}
                >
                  {language === 'it' ? 'Task Completati — Settimana' : 'Completed Tasks — Week'}
                </p>
                <div className="flex items-baseline gap-3">
                  <span
                      key={totalTasks}

                      className="font-light tracking-tight"
                      style={{ color: IMPREDO.textPrimary, fontSize: 22 }}
                    >
                      {totalTasks}
                    </span>
                  <span
                    className="font-semibold uppercase tracking-[.06em]"
                    style={{ color: IMPREDO.accent, fontSize: 12 }}
                  >
                    +18% {language === 'it' ? 'vs settimana scorsa' : 'vs last week'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2" style={{ background: IMPREDO.accent }} />
                  <span
                    className="uppercase tracking-[.06em] font-semibold"
                    style={{ color: IMPREDO.textSecondary, fontSize: 10 }}
                  >
                    {language === 'it' ? 'Completati' : 'Completed'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2" style={{ background: IMPREDO.dataMuted }} />
                  <span
                    className="uppercase tracking-[.06em] font-semibold"
                    style={{ color: IMPREDO.textSecondary, fontSize: 10 }}
                  >
                    {language === 'it' ? 'In Corso' : 'In Progress'}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={translatedProductivityData} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" stroke={IMPREDO.border} vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: IMPREDO.textMuted, fontSize: 10, fontFamily: 'Montserrat', fontWeight: 600 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: IMPREDO.textMuted, fontSize: 10, fontFamily: 'Montserrat', fontWeight: 600 }}
                    domain={[0, 50]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: IMPREDO.cardBg,
                      border: `1px solid ${IMPREDO.accent}`,
                      borderRadius: 0,
                      fontSize: 11,
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.06em',
                    }}
                    formatter={(value: number, name: string) => [
                      value,
                      name === 'completati' ? (language === 'it' ? 'Completati' : 'Completed') : (language === 'it' ? 'In Corso' : 'In Progress')
                    ]}
                  />
                  <Bar isAnimationActive={false}
                    dataKey="inCorso"
                    fill={IMPREDO.dataMuted}
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar isAnimationActive={false}
                    dataKey="completati"
                    fill={IMPREDO.accent}
                    radius={[0, 0, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      </div>
    </ScrollableX>
  );
};

export default ConstructionDemo;
