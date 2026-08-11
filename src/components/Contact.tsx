import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';

const WEBHOOK_URL =
  'https://bao02.app.n8n.cloud/webhook/470caafc-52a4-44fd-ac45-b272cd860614';

/** Durata del messaggio di conferma prima di riproporre il modulo. */
const SUCCESS_NOTICE_MS = 8000;

const EMPTY_FORM = {
  fullname: '',
  emailadress: '',
  phonenumber: '',
  companyname: '',
  automationtype: '',
} as const;

type FormData = { -readonly [K in keyof typeof EMPTY_FORM]: string };

/**
 * I campi partono da 16px: sotto quella soglia iOS Safari ingrandisce la
 * pagina appena si tocca il campo, e non la rimpicciolisce più. Dal breakpoint
 * sm in su torna al corpo del sito, dove il problema non esiste.
 */
const FIELD_CLASS =
  'w-full px-0 py-3 min-h-11 bg-transparent border-b-2 border-lineStrong outline-none text-base sm:text-body text-ink placeholder:text-inkFaint transition-colors duration-200 hover:border-inkFaint focus:border-ink';

interface FieldProps {
  id: keyof FormData;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Campo del modulo: un'unica definizione per tutti gli input di testo. */
const Field: React.FC<FieldProps> = ({
  id,
  label,
  placeholder,
  type = 'text',
  required = false,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="label block mb-sm">
      {label}
      {required && ' *'}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={FIELD_CLASS}
    />
  </div>
);

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({ ...EMPTY_FORM });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!privacyConsent) {
      setError(t('contact.privacyError'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }

      setIsSubmitted(true);
      setFormData({ ...EMPTY_FORM });
      setPrivacyConsent(false);
      window.setTimeout(() => setIsSubmitted(false), SUCCESS_NOTICE_MS);
    } catch (submitError: unknown) {
      const message =
        submitError instanceof Error ? submitError.message : 'Unknown submit error';
      console.error('Contact form submit failed:', message);
      setError(t('contact.genericError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" labelledBy="contact-title">
      <SectionHeader
        label={t('contact.eyebrow')}
        title={t('contact.title')}
        titleId="contact-title"
        lead={t('contact.subtitle')}
      />

      {isSubmitted ? (
        <div className="panel-feature max-w-[68ch]" role="status">
          <h3 className="title-block mb-md">{t('contact.successTitle')}</h3>
          <p className="text-body-muted">{t('contact.successMessage1')}</p>
          <p className="text-body-muted mt-sm">{t('contact.successMessage2')}</p>
          <p className="text-body-muted mt-sm">{t('contact.successMessage3')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="panel-feature space-y-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
            <Field
              id="fullname"
              label={t('contact.name')}
              placeholder={t('contact.namePlaceholder')}
              required
              value={formData.fullname}
              onChange={handleChange}
            />
            <Field
              id="emailadress"
              type="email"
              label={t('contact.email')}
              placeholder={t('contact.emailPlaceholder')}
              required
              value={formData.emailadress}
              onChange={handleChange}
            />
            <Field
              id="phonenumber"
              type="tel"
              label={t('contact.phone')}
              placeholder={t('contact.phonePlaceholder')}
              required
              value={formData.phonenumber}
              onChange={handleChange}
            />
            <Field
              id="companyname"
              label={t('contact.company')}
              placeholder={t('contact.companyPlaceholder')}
              required
              value={formData.companyname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="automationtype" className="label block mb-sm">
              {t('contact.message')}
            </label>
            <textarea
              id="automationtype"
              name="automationtype"
              value={formData.automationtype}
              onChange={handleChange}
              rows={5}
              placeholder={t('contact.placeholder')}
              className={`${FIELD_CLASS} resize-none`}
            />
          </div>

          <div className="flex items-start gap-sm">
            {/* La casella resta di 16px, ma l'etichetta che la avvolge porta
                l'area sensibile a 44px. Il margine negativo compensa il
                padding: l'allineamento col testo non cambia. */}
            <label
              htmlFor="privacyConsent"
              className="shrink-0 flex items-center justify-center min-h-11 min-w-11 -m-3 cursor-pointer"
            >
              <input
                type="checkbox"
                id="privacyConsent"
                checked={privacyConsent}
                onChange={(event) => setPrivacyConsent(event.target.checked)}
                className="w-4 h-4 border border-lineStrong accent-ink cursor-pointer"
              />
            </label>
            <label htmlFor="privacyConsent" className="text-meta text-inkMuted cursor-pointer">
              {t('contact.privacyConsent')}{' '}
              <Link
                to="/privacy-policy"
                className="link-inline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('contact.privacyLink')}
              </Link>
              {t('contact.privacySuffix') && ` ${t('contact.privacySuffix')}`} *
            </label>
          </div>

          {error && (
            <p role="alert" className="border-l-2 border-ink bg-surface2 pl-md py-sm text-meta text-ink">
              {error}
            </p>
          )}

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
            {isSubmitting ? t('contact.processing') : t('contact.submit')}
          </button>
        </form>
      )}
    </Section>
  );
};

export default Contact;
