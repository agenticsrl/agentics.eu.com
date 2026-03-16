import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const IMPREDO = {
  primary: '#0A2A66',
  accent: '#4A90E2',
  alert: '#D0021B',
  bg: '#070B16',
  cardBg: '#0C1222',
  border: '#1A2640',
  borderLight: '#253350',
  textPrimary: '#E2E8F0',
  textSecondary: '#6C7F94',
  textMuted: '#3A4E68',
  accentGlow: 'rgba(74, 144, 226, 0.12)',
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

const taskCategories = [
  { category: 'Ordini Elaborati', count: 156, color: IMPREDO.accent },
  { category: 'Preventivi Inviati', count: 89, color: '#5BA0F0' },
  { category: 'Fatture Generate', count: 67, color: IMPREDO.primary },
  { category: 'Email Gestite', count: 234, color: '#2E5CA8' },
];

const formatCurrency = (value: number) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
};

const AnimatedNumber: React.FC<{ value: number; duration?: number; suffix?: string; prefix?: string; decimals?: number }> = ({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTime = useRef<number | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * easeOut);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value, duration]);

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString();

  return <>{prefix}{formatted}{suffix}</>;
};

const ConstructionDemo: React.FC = () => {
  const { language } = useLanguage();
  const [dataVariation, setDataVariation] = useState(0);
  const [currentSales, setCurrentSales] = useState(67.8);
  const [pulseKey, setPulseKey] = useState(0);

  const targetClients = 847;
  const targetOrders = 1243;

  useEffect(() => {
    const interval = setInterval(() => {
      setDataVariation(prev => {
        const change = (Math.random() - 0.5) * 2;
        return Math.max(-3, Math.min(3, prev + change));
      });
      setCurrentSales(prev => {
        const change = (Math.random() - 0.4) * 0.3;
        return Math.max(66.5, Math.min(69.2, prev + change));
      });
      setPulseKey(prev => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const salesData = useMemo(() => generateSalesData(dataVariation), [dataVariation]);
  const productivityData = useMemo(() => generateProductivityData(dataVariation), [dataVariation]);

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full max-w-5xl mx-auto relative"
    >
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral/30 via-neutral/20 to-transparent z-10 pointer-events-none" />
      <div className="demo-container max-h-[520px] overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <style>{`
          .demo-container {
            min-width: 900px;
          }
          @media (max-width: 940px) {
            .demo-container {
              transform: scale(0.4);
              transform-origin: top left;
              min-width: 900px;
              margin-bottom: -330px;
              margin-left: 50%;
              position: relative;
              left: -180px;
              user-select: none;
              -webkit-user-select: none;
            }
          }
        `}</style>

      <div
        className="overflow-hidden"
        style={{ background: IMPREDO.bg, border: `1px solid ${IMPREDO.border}` }}
      >
        {/* Top bar */}
        <div
          className="px-6 py-3 flex items-center justify-between gap-2"
          style={{ borderBottom: `1px solid ${IMPREDO.border}` }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-3" style={{ color: IMPREDO.textSecondary, fontSize: 11 }}>
              <motion.div
                key={pulseKey}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 flex-shrink-0"
                style={{ background: IMPREDO.accent, boxShadow: `0 0 6px ${IMPREDO.accentGlow}` }}
              />
              <span
                className="font-semibold tracking-[.08em] uppercase truncate"
                style={{ color: IMPREDO.textPrimary, fontSize: 11 }}
              >
                {language === 'it' ? 'Gestionale Aziendale' : 'Business Management'}
              </span>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] font-semibold uppercase tracking-[.08em] px-2 py-0.5 flex-shrink-0"
                style={{
                  color: IMPREDO.accent,
                  background: 'rgba(74, 144, 226, 0.08)',
                  border: `1px solid rgba(74, 144, 226, 0.2)`,
                }}
              >
                {language === 'it' ? 'AI Assistito' : 'AI Assisted'}
              </motion.span>
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
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={Math.floor(currentSales * 10)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="font-light tracking-tight"
                        style={{ color: IMPREDO.textPrimary, fontSize: 32 }}
                      >
                        {currentSales.toFixed(1)}K
                      </motion.span>
                    </AnimatePresence>
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="font-semibold uppercase tracking-[.06em]"
                      style={{ color: IMPREDO.accent, fontSize: 12 }}
                    >
                      +12.4%
                    </motion.span>
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
                    <Area
                      type="monotone"
                      dataKey="obiettivo"
                      stroke={IMPREDO.textMuted}
                      strokeWidth={1}
                      fill="transparent"
                      strokeDasharray="4 4"
                    />
                    <Area
                      type="monotone"
                      dataKey="vendite"
                      stroke={IMPREDO.accent}
                      strokeWidth={2}
                      fill="url(#salesGradientImpredo)"
                      animationDuration={3500}
                      animationEasing="ease-out"
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
                  <AnimatedNumber value={546} duration={3000} />
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
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.count / 234) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
                        className="h-full"
                        style={{ backgroundColor: item.color }}
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ borderColor: IMPREDO.accent }}
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
                    <AnimatedNumber value={stat.value} duration={2500} suffix={stat.suffix} />
                  )}
                </p>
                <p
                  className="mt-1 uppercase tracking-[.06em] font-medium"
                  style={{ color: IMPREDO.textMuted, fontSize: 10 }}
                >
                  {stat.sub}
                </p>
              </motion.div>
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
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalTasks}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-light tracking-tight"
                      style={{ color: IMPREDO.textPrimary, fontSize: 22 }}
                    >
                      {totalTasks}
                    </motion.span>
                  </AnimatePresence>
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
                  <div className="w-3 h-2" style={{ background: IMPREDO.border }} />
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
                  <Bar
                    dataKey="inCorso"
                    fill={IMPREDO.border}
                    radius={[0, 0, 0, 0]}
                    animationDuration={1200}
                  />
                  <Bar
                    dataKey="completati"
                    fill={IMPREDO.accent}
                    radius={[0, 0, 0, 0]}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default ConstructionDemo;
