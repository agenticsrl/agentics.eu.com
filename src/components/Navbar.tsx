import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isAboutPage
          ? 'bg-white border-b border-neutral py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group"
        >
          <div className="logo-glow">
            <img
              src="/BIANCO.svg"
              alt="Agentics"
              className="h-12 sm:h-14 md:h-16"
              style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(98%) saturate(6952%) hue-rotate(217deg) brightness(101%) contrast(107%)' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="nav-link font-semibold text-[11px] uppercase tracking-[.08em] text-graphite hover:text-aiblue transition-colors duration-200"
          >
            {t('nav.about')}
          </Link>
          <button
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const solutionsSection = document.getElementById('solutions');
                  if (solutionsSection) {
                    const offsetTop = solutionsSection.offsetTop - 100;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }, 300);
              } else {
                const solutionsSection = document.getElementById('solutions');
                if (solutionsSection) {
                  const offsetTop = solutionsSection.offsetTop - 100;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }
            }}
            className="nav-link font-semibold text-[11px] uppercase tracking-[.08em] text-graphite hover:text-aiblue transition-colors duration-200"
          >
            {t('nav.features')}
          </button>
          <button
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="nav-link font-semibold text-[11px] uppercase tracking-[.08em] text-graphite hover:text-aiblue transition-colors duration-200"
          >
            {t('nav.contact')}
          </button>
          <motion.button
            onClick={scrollToContact}
            className="bg-aiblue text-white hover:bg-aiblue/90 px-4 xl:px-6 py-2 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200"
            whileTap={{ scale: 0.98 }}
          >
            {t('nav.getStarted')}
          </motion.button>
          <motion.button
            onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
            className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[.06em] border border-graphite/30 text-graphite hover:border-aiblue hover:text-aiblue transition-colors duration-200"
            whileTap={{ scale: 0.98 }}
          >
            {language === 'it' ? 'EN' : 'IT'}
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="lg:hidden p-1 text-graphite"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-neutral w-full absolute"
          >
            <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col space-y-4 sm:space-y-6">
              <Link
                to="/about"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="nav-link font-semibold text-[11px] uppercase tracking-[.08em] text-graphite hover:text-aiblue transition-colors duration-200"
              >
                {t('nav.about')}
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const solutionsSection = document.getElementById('solutions');
                      if (solutionsSection) {
                        const offsetTop = solutionsSection.offsetTop - 100;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                    }, 300);
                  } else {
                    const solutionsSection = document.getElementById('solutions');
                    if (solutionsSection) {
                      const offsetTop = solutionsSection.offsetTop - 100;
                      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                  }
                }}
                className="nav-link font-semibold text-[11px] uppercase tracking-[.08em] text-graphite hover:text-aiblue transition-colors duration-200 text-left"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="nav-link font-semibold text-[11px] uppercase tracking-[.08em] text-graphite hover:text-aiblue transition-colors duration-200 text-left"
              >
                {t('nav.contact')}
              </button>
              <div className="flex gap-3">
                <motion.button
                  onClick={scrollToContact}
                  className="bg-aiblue text-white hover:bg-aiblue/90 px-6 py-3 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200 flex-1"
                  whileTap={{ scale: 0.98 }}
                >
                  {t('nav.getStarted')}
                </motion.button>
                <motion.button
                  onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
                  className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[.06em] border border-graphite/30 text-graphite hover:border-aiblue hover:text-aiblue transition-colors duration-200"
                  whileTap={{ scale: 0.98 }}
                >
                  {language === 'it' ? 'EN' : 'IT'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;