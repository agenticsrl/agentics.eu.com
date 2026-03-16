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
  { category: 'Ordini Elaborati', count: 156, color: '#3b82f6' },
  { category: 'Preventivi Inviati', count: 89, color: '#60a5fa' },
  { category: 'Fatture Generate', count: 67, color: '#93c5fd' },
  { category: 'Email Gestite', count: 234, color: '#bfdbfe' },
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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral/30 via-neutral/20 to-transparent z-10 pointer-events-none rounded-b-xl" />
      <div className="demo-container max-h-[520px] overflow-hidden rounded-xl shadow-2xl">
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
            }
          }
        `}</style>
      <div className="bg-[#0a0a0a] rounded-xl border border-[#1a1a1a] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-2 text-[#888] text-sm">
              <motion.div
                key={pulseKey}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)] flex-shrink-0"
              />
              <span className="text-white font-medium truncate">
                {language === 'it' ? 'Gestionale Aziendale' : 'Business Management'}
              </span>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-400 text-xs px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/30 flex-shrink-0"
              >
                {language === 'it' ? 'AI Assistito' : 'AI Assisted'}
              </motion.span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white text-xl font-medium">
                {language === 'it' ? 'Dashboard Operativa' : 'Operations Dashboard'}
              </h2>
              <p className="text-[#666] text-sm mt-1">
                {language === 'it' ? 'Monitoraggio in tempo reale' : 'Real-time monitoring'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2 bg-[#111] rounded-lg border border-[#1a1a1a] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div>
                  <p className="text-[#666] text-sm mb-1">
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
                        className="text-white text-4xl font-light tracking-tight"
                      >
                        {currentSales.toFixed(1)}K
                      </motion.span>
                    </AnimatePresence>
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-blue-400 text-sm font-medium"
                    >
                      +12.4%
                    </motion.span>
                  </div>
                  <p className="text-[#444] text-xs mt-1">
                    {language === 'it' ? 'vs mese precedente' : 'vs previous month'} (60.3K)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#444] text-xs mb-1">
                    {language === 'it' ? 'Obiettivo Q4' : 'Q4 Target'}
                  </p>
                  <p className="text-white text-lg font-medium">85K</p>
                  <p className="text-blue-400/60 text-xs">{language === 'it' ? 'in linea' : 'on track'}</p>
                </div>
              </div>
              <div className="h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={translatedSalesData}>
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.1} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#444', fontSize: 11 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#444', fontSize: 11 }}
                      tickFormatter={(value) => `${value / 1000}K`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #3b82f6',
                        borderRadius: '8px',
                        fontSize: '12px',
                        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)'
                      }}
                      labelStyle={{ color: '#888' }}
                      formatter={(value: number, name: string) => [
                        `${formatCurrency(value)}`,
                        name === 'vendite' ? (language === 'it' ? 'Vendite' : 'Sales') : (language === 'it' ? 'Obiettivo' : 'Target')
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="obiettivo"
                      stroke="#333"
                      strokeWidth={1.5}
                      fill="transparent"
                      strokeDasharray="4 4"
                    />
                    <Area
                      type="monotone"
                      dataKey="vendite"
                      stroke="#3b82f6"
                      strokeWidth={2.5}
                      fill="url(#salesGradient)"
                      filter="url(#glow)"
                      animationDuration={3500}
                      animationEasing="ease-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#111] rounded-lg border border-[#1a1a1a] p-5 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <p className="text-[#666] text-sm mb-1">
                {language === 'it' ? 'Attività Automatizzate' : 'Automated Tasks'}
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-white text-4xl font-light tracking-tight">
                  <AnimatedNumber value={546} duration={3000} />
                </span>
                <span className="text-[#666] text-sm">{language === 'it' ? 'oggi' : 'today'}</span>
              </div>
              <div className="space-y-3">
                {taskCategories.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#666]">
                        {language === 'en' ? item.category.replace('Ordini Elaborati', 'Orders Processed').replace('Preventivi Inviati', 'Quotes Sent').replace('Fatture Generate', 'Invoices Generated').replace('Email Gestite', 'Emails Handled') : item.category}
                      </span>
                      <span className="text-white">{item.count}</span>
                    </div>
                    <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.count / 234) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: item.color,
                          boxShadow: `0 0 8px ${item.color}40`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
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
                sub: language === 'it' ? 'lead to cliente' : 'lead to client',
                isDecimal: true
              },
              {
                label: language === 'it' ? 'Tempo Risposta' : 'Response Time',
                value: 2.4,
                suffix: 'min',
                sub: language === 'it' ? 'media assistita' : 'assisted average',
                isDecimal: true
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-[#111] rounded-lg border border-[#1a1a1a] p-5 transition-colors duration-300"
              >
                <p className="text-[#666] text-sm mb-2">{stat.label}</p>
                <p className="text-white text-2xl font-light tracking-tight">
                  {stat.isDecimal ? (
                    <>{stat.value}<span className="text-base text-[#666]">{stat.suffix}</span></>
                  ) : (
                    <AnimatedNumber value={stat.value} duration={2500} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-[#555] text-xs mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#111] rounded-lg border border-[#1a1a1a] p-5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-40 h-20 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div>
                <p className="text-[#666] text-sm mb-1">
                  {language === 'it' ? 'Task Completati - Settimana' : 'Completed Tasks - Week'}
                </p>
                <div className="flex items-baseline gap-3">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalTasks}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white text-2xl font-light tracking-tight"
                    >
                      {totalTasks}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-blue-400 text-sm">+18% {language === 'it' ? 'vs settimana scorsa' : 'vs last week'}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2 bg-blue-500 rounded-sm" />
                  <span className="text-[#666] text-xs">{language === 'it' ? 'Completati' : 'Completed'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2 bg-[#333] rounded-sm" />
                  <span className="text-[#666] text-xs">{language === 'it' ? 'In Corso' : 'In Progress'}</span>
                </div>
              </div>
            </div>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={translatedProductivityData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#444', fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#444', fontSize: 11 }}
                    domain={[0, 50]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #3b82f6',
                      borderRadius: '8px',
                      fontSize: '12px',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)'
                    }}
                    formatter={(value: number, name: string) => [
                      value,
                      name === 'completati' ? (language === 'it' ? 'Completati' : 'Completed') : (language === 'it' ? 'In Corso' : 'In Progress')
                    ]}
                  />
                  <Bar
                    dataKey="inCorso"
                    fill="#222"
                    radius={[3, 3, 0, 0]}
                    animationDuration={1200}
                  />
                  <Bar
                    dataKey="completati"
                    fill="#3b82f6"
                    radius={[3, 3, 0, 0]}
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
