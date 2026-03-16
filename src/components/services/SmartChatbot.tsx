import React, { useState, useRef, useEffect } from 'react';
import { MessagesSquare, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BackHomeButton from '../BackHomeButton';
import Contact from '../Contact';
import { useSEO } from '../../hooks/useSEO';
import { useLanguage } from '../../contexts/LanguageContext';
import { LogoLoop } from '../ui/LogoLoop';

const formatMarkdownToHTML = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^(\d+)\.\s+\*\*(.*?)\*\*:/gm, '<div class="mb-3"><strong class="text-aiblue">$1. $2:</strong></div>')
    .replace(/^-\s+(.+)/gm, '<div class="ml-4 mb-2 flex items-start gap-2"><span class="text-aiblue mt-1">•</span><span>$1</span></div>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br>')
    .replace(/^(?!<)/, '<p class="mb-4">')
    .replace(/(?!>)$/, '</p>');
};

const SmartChatbot: React.FC = () => {
  const { t, language } = useLanguage();
  const [logoGap, setLogoGap] = useState(64);

  useSEO({
    title: language === 'it'
      ? 'Chatbot AI Intelligente 24/7 | Agentics - Assistente Virtuale'
      : '24/7 Smart AI Chatbot | Agentics - Virtual Assistant',
    description: language === 'it'
      ? 'Chatbot AI che gestisce automaticamente le richieste clienti 24/7 con linguaggio naturale. Integrazione con CRM, WhatsApp e escalation a operatori umani quando necessario.'
      : 'AI Chatbot that automatically handles customer requests 24/7 with natural language. Integration with CRM, WhatsApp and escalation to human operators when needed.',
    keywords: language === 'it'
      ? 'chatbot AI, assistente virtuale intelligente, chatbot 24/7, supporto clienti automatico, chatbot linguaggio naturale, integrazione WhatsApp AI, chatbot italiano, automazione customer service'
      : 'AI chatbot, intelligent virtual assistant, 24/7 chatbot, automatic customer support, natural language chatbot, WhatsApp AI integration, customer service automation',
    canonicalUrl: 'https://agentics.eu.com/services/smart-chatbot'
  });

  useEffect(() => {
    const updateGap = () => {
      setLogoGap(window.innerWidth >= 768 ? 120 : 64);
    };

    updateGap();
    window.addEventListener('resize', updateGap);
    return () => window.removeEventListener('resize', updateGap);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const processSteps = [
    {
      number: '01',
      title: t('smartChatbot.step1.title'),
      description: t('smartChatbot.step1.description')
    },
    {
      number: '02',
      title: t('smartChatbot.step2.title'),
      description: t('smartChatbot.step2.description')
    },
    {
      number: '03',
      title: t('smartChatbot.step3.title'),
      description: t('smartChatbot.step3.description')
    },
    {
      number: '04',
      title: t('smartChatbot.step4.title'),
      description: t('smartChatbot.step4.description')
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
    >
      <BackHomeButton />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-graphite mb-6 leading-tight">
              {t('smartChatbot.pageTitle')}
            </h1>

            <p className="text-lg md:text-xl text-graphite/70 leading-relaxed mb-10 max-w-3xl mx-auto md:mx-0">
              {t('smartChatbot.pageDescription')}
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-aiblue text-white hover:bg-aiblue/90 rounded-sm font-medium transition-colors"
            >
              {t('smartChatbot.cta')}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-b border-graphite/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="font-display font-semibold text-lg md:text-xl text-graphite/80">
              {language === 'it' ? 'Integrabile con' : 'Integrates with'}
            </h3>
          </motion.div>
          <LogoLoop
            logos={[
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/whatsapp-svgrepo-com.svg"
                      alt="WhatsApp"
                      className="h-10 w-10"
                      style={{ filter: 'invert(48%) sepia(98%) saturate(1352%) hue-rotate(86deg) brightness(98%) contrast(101%)' }}
                    />
                  </div>
                ),
                title: 'WhatsApp'
              },
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/telegram-svgrepo-com.svg"
                      alt="Telegram"
                      className="h-10 w-10"
                    />
                  </div>
                ),
                title: 'Telegram'
              },
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/instagram-2016-logo-svgrepo-com.svg"
                      alt="Instagram"
                      className="h-10 w-10"
                    />
                  </div>
                ),
                title: 'Instagram'
              },
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/facebook-messenger-3-logo-svgrepo-com.svg"
                      alt="Facebook Messenger"
                      className="h-10 w-10"
                    />
                  </div>
                ),
                title: 'Facebook Messenger'
              },
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/wechat-svgrepo-com.svg"
                      alt="WeChat"
                      className="h-10 w-10"
                    />
                  </div>
                ),
                title: 'WeChat'
              },
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/IMessage_logo.svg"
                      alt="iMessage"
                      className="h-10 w-10"
                    />
                  </div>
                ),
                title: 'iMessage'
              },
              {
                node: (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="/tiktok-icon-white-1-logo-svgrepo-com.svg"
                      alt="TikTok"
                      className="h-10 w-10"
                    />
                  </div>
                ),
                title: 'TikTok'
              }
            ]}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={logoGap}
            pauseOnHover={true}
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-4">
              {t('smartChatbot.demoTitle')}
            </h2>
            <p className="text-graphite/60 max-w-2xl mx-auto">
              {t('smartChatbot.demoSubtitle')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-graphite/10 overflow-hidden">
              <div className="bg-aiblue px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessagesSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">
                      {t('smartChatbot.chatbotName')}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-sm">{t('smartChatbot.online')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CustomChatInterface />

              <div className="p-6 bg-neutral/30 border-t border-graphite/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-aiblue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-graphite mb-2">
                      {t('smartChatbot.capabilities.title')}
                    </h4>
                    <ul className="text-graphite/70 space-y-1 text-sm">
                      <li>{t('smartChatbot.capabilities.1')}</li>
                      <li>{t('smartChatbot.capabilities.2')}</li>
                      <li>{t('smartChatbot.capabilities.3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-4">
              {t('smartChatbot.processTitle')}
            </h2>
            <p className="text-graphite/60 max-w-2xl">
              {t('smartChatbot.processSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 md:gap-8"
              >
                <span className="font-display font-bold text-2xl md:text-3xl text-aiblue">
                  {step.number}
                </span>
                <div className="pb-8 border-b border-graphite/10 flex-1">
                  <h3 className="font-display font-semibold text-lg text-graphite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-graphite/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-graphite/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('smartChatbot.stat1.value')}</div>
              <div className="text-graphite/60">{t('smartChatbot.stat1.label')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('smartChatbot.stat2.value')}</div>
              <div className="text-graphite/60">{t('smartChatbot.stat2.label')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('smartChatbot.stat3.value')}</div>
              <div className="text-graphite/60">{t('smartChatbot.stat3.label')}</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
    </motion.div>
  );
};

const CustomChatInterface: React.FC = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: formatMarkdownToHTML(language === 'it' ? "Ciao! Sono l'Assistente AI di Agentics. Come posso aiutarti oggi?" : "Hi! I'm the Agentics AI Assistant. How can I help you today?"),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: formatMarkdownToHTML(inputValue),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://bao02.app.n8n.cloud/webhook/7fd8d68c-ee8d-4c54-a79b-4a37037fcdd5/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendMessage',
          sessionId: 'demo-session',
          chatInput: inputValue
        })
      });

      const data = await response.json();

      const responseText = data.output || data.response || data.message || data.text || t('smartChatbot.chatDefaultResponse');

      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: formatMarkdownToHTML(responseText),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch {
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          text: formatMarkdownToHTML(t('smartChatbot.chatErrorResponse')),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-gray-50 h-[400px] flex flex-col">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] rounded-xl px-4 py-3 ${
              message.isBot
                ? 'bg-white text-graphite border border-graphite/10'
                : 'bg-aiblue text-white'
            }`}>
              {message.isBot && (
                <div className="flex items-center gap-2 mb-1">
                  <MessagesSquare size={12} className="text-aiblue" />
                  <span className="text-xs font-medium text-aiblue">{t('smartChatbot.chatAssistant')}</span>
                </div>
              )}
              <div
                className="leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
              <span className={`text-xs mt-1 block ${
                message.isBot ? 'text-graphite/50' : 'text-white/70'
              }`}>
                {message.timestamp.toLocaleTimeString(language === 'it' ? 'it-IT' : 'en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-graphite/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-aiblue/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-aiblue/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-aiblue/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-graphite/10 p-4 bg-white">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('smartChatbot.chatPlaceholder')}
            className="flex-1 border border-graphite/20 rounded-lg px-4 py-2 focus:outline-none focus:border-aiblue text-sm"
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-aiblue hover:bg-aiblue/90 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22,2 15,22 11,13 2,9"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartChatbot;
