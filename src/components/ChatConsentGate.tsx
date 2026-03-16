import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ChatConsentGate = () => {
  const { t } = useLanguage();
  const [hasConsented, setHasConsented] = useState(() => {
    return localStorage.getItem('chatConsentAccepted') === 'true';
  });
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const styleId = 'chat-consent-hide-style';

    const updateChatVisibility = () => {
      const chatWindow = document.querySelector('.chat-window') as HTMLElement;
      const existingStyle = document.getElementById(styleId);

      if (chatWindow) {
        const isVisible = window.getComputedStyle(chatWindow).display !== 'none';
        setChatOpen(isVisible);

        if (isVisible && !hasConsented) {
          if (!existingStyle) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
              .chat-window .chat-body,
              .chat-window .chat-messages-wrapper,
              .chat-window .chat-input,
              .chat-window textarea,
              .chat-window input:not([type="checkbox"]) {
                filter: blur(3px);
                pointer-events: none;
                user-select: none;
              }
            `;
            document.head.appendChild(style);
          }
        } else {
          if (existingStyle) {
            existingStyle.remove();
          }
        }
      }
    };

    const observer = new MutationObserver(updateChatVisibility);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    const interval = setInterval(updateChatVisibility, 200);
    updateChatVisibility();

    return () => {
      observer.disconnect();
      clearInterval(interval);
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
    };
  }, [hasConsented]);

  const handleAccept = () => {
    localStorage.setItem('chatConsentAccepted', 'true');
    setHasConsented(true);
  };

  if (hasConsented || !chatOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        width: '380px',
        maxWidth: 'calc(100vw - 40px)',
        backgroundColor: 'white',
        borderRadius: 0,
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
        zIndex: 10001,
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        border: '1px solid rgba(1, 99, 245, 0.1)',
      }}
    >
      <div
        style={{
          background: '#0163F5',
          padding: '20px',
          color: 'white',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
          {t('chatConsent.title')}
        </h3>
      </div>

      <div style={{ padding: '24px' }}>
        <p
          style={{
            fontSize: '14px',
            color: '#333',
            margin: '0 0 20px',
            lineHeight: '1.6',
          }}
        >
          {t('chatConsent.description')}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            padding: '16px',
            backgroundColor: '#f0f7ff',
            borderRadius: 0,
            border: '1px solid #c9dff7',
            marginBottom: '20px',
          }}
        >
          <input
            type="checkbox"
            id="chat-privacy-consent"
            checked={hasConsented}
            onChange={(e) => {
              if (e.target.checked) {
                handleAccept();
              }
            }}
            style={{
              marginTop: '2px',
              width: '22px',
              height: '22px',
              minWidth: '22px',
              cursor: 'pointer',
              accentColor: '#0163F5',
            }}
          />
          <label
            htmlFor="chat-privacy-consent"
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#333',
              cursor: 'pointer',
            }}
          >
            {t('chatConsent.acceptTerms')}{' '}
            <a
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0163F5', fontWeight: 600 }}
            >
              {t('chatConsent.termsOfService')}
            </a>{' '}
            {t('chatConsent.and')}{' '}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0163F5', fontWeight: 600 }}
            >
              {t('chatConsent.privacyPolicy')}
            </a>
          </label>
        </div>

        <p
          style={{
            fontSize: '12px',
            color: '#888',
            margin: 0,
            textAlign: 'center',
          }}
        >
          {t('chatConsent.checkboxHint')}
        </p>
      </div>
    </div>
  );
};

export default ChatConsentGate;
