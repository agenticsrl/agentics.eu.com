import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Case Study FolioFox */}
        <motion.div
          className="max-w-6xl mx-auto mb-20 sm:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-aiblue tracking-wider uppercase mb-4">
              {t('features.caseStudy')}
            </span>
            <div className="flex items-center justify-center mb-6">
              <img
                src="/Frame.svg"
                alt="FolioFox Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-lg sm:text-xl text-graphite/70 max-w-3xl mx-auto leading-relaxed">
              {t('features.folioFoxDescription')}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-aiblue/20 to-graphite/20 rounded-lg blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl border border-graphite/10">
              <div className="aspect-video w-full overflow-hidden bg-graphite/5 relative">
                <iframe
                  src="https://www.foliofox.com/"
                  title="FolioFox AI Portfolio Analysis Platform"
                  className="w-full h-full border-0 scale-100 origin-top-left"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div className="p-8 sm:p-10 bg-gradient-to-br from-white to-neutral/30">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-graphite mb-3">
                      {t('features.folioFoxTitle')}
                    </h3>
                    <p className="text-base text-graphite/60">
                      {t('features.folioFoxSubtitle')}
                    </p>
                  </div>
                  <a
                    href="https://www.foliofox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite text-white hover:bg-aiblue rounded-sm font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap group/button"
                  >
                    {t('features.visitFolioFox')}
                    <ExternalLink size={18} className="group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Applicazioni Industriali Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-graphite mb-8 tracking-tight leading-tight">
            {t('features.aiVisionTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-graphite/70 leading-relaxed mb-12 max-w-3xl mx-auto">
            {t('features.aiVisionDescription')}
          </p>

          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4PhEJSdK_gQ?autoplay=1&mute=1&loop=1&playlist=4PhEJSdK_gQ"
              title={language === 'en' ? 'Industrial AI Vision' : 'AI Vision Industriale'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;