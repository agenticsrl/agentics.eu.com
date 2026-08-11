import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

/** Ritardo minimo per far montare la home prima di cercare l'ancora. */
const ROUTE_CHANGE_DELAY_MS = 120;

interface NavItem {
  label: string;
  to?: string;
  sectionId?: string;
}

/**
 * Header strutturale: altezza fissa, fondo e filetto sempre identici.
 * Non reagisce allo scroll, così non introduce spostamenti di layout.
 */
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Porta a una sezione della home da qualunque pagina.
   * Unico punto in cui vive questa logica: prima era ripetuta per ogni voce.
   */
  const goToHomeSection = (id: string) => {
    setIsMenuOpen(false);

    const scrollToTarget = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    if (location.pathname === '/') {
      scrollToTarget();
      return;
    }

    navigate('/');
    window.setTimeout(scrollToTarget, ROUTE_CHANGE_DELAY_MS);
  };

  /* Nessuna voce "Contatti": il pulsante "Contattaci" porta già alla stessa sezione. */
  const navItems: readonly NavItem[] = [
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.features'), sectionId: 'solutions' },
  ];

  const renderNavItem = (item: NavItem, className: string) =>
    item.to ? (
      <Link key={item.label} to={item.to} onClick={() => setIsMenuOpen(false)} className={className}>
        {item.label}
      </Link>
    ) : (
      <button
        key={item.label}
        type="button"
        onClick={() => goToHomeSection(item.sectionId as string)}
        className={className}
      >
        {item.label}
      </button>
    );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-header bg-canvas border-b border-line">
      <div className="container-content h-full flex items-center justify-between gap-md">
        {/* Logotipo ricavato dal logo di marca, ritagliato sulla sola scritta */}
        <Link
          to="/"
          className="shrink-0 flex items-center min-h-11"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/agentics-wordmark.svg"
            alt="Agentics"
            width={373}
            height={61}
            className="h-5 sm:h-6 lg:h-7 w-auto"
          />
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-lg">
          {navItems.map((item) => renderNavItem(item, 'label hover:text-ink'))}
          <button
            type="button"
            onClick={() => goToHomeSection('contact')}
            className="btn-primary py-2"
          >
            {t('nav.getStarted')}
          </button>
          <button
            type="button"
            onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
            className="btn-secondary py-2 px-sm"
          >
            {language === 'it' ? 'EN' : 'IT'}
          </button>
        </nav>

        {/* Comando di navigazione principale su telefono: area di almeno 44px.
            Il margine negativo riassorbe il padding, così la scritta resta
            allineata al bordo del contenitore come prima. */}
        <button
          type="button"
          className="lg:hidden label text-ink inline-flex items-center justify-end min-h-11 min-w-11 -mr-sm pl-sm pr-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-canvas border-b border-line">
          <div className="container-content py-md flex flex-col">
            {navItems.map((item) =>
              renderNavItem(item, 'label py-sm border-b border-line text-left hover:text-ink')
            )}
            <div className="flex gap-sm pt-md">
              <button
                type="button"
                onClick={() => goToHomeSection('contact')}
                className="btn-primary flex-1"
              >
                {t('nav.getStarted')}
              </button>
              <button
                type="button"
                onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
                className="btn-secondary"
              >
                {language === 'it' ? 'EN' : 'IT'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
