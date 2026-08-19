import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';

/**
 * Token Mapbox: solo da environment, mai in repo. Un `pk.` finisce comunque
 * nel bundle servito al browser, quindi la protezione vera sono le
 * restrizioni per URL nel pannello Mapbox — ma in chiaro nel codice lo blocca
 * la push protection di GitHub, che segnala anche i token pubblici.
 * Vedi .env.example.
 */
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN ?? '';
/* Senza token la mappa non viene nemmeno richiesta: la chiamata tornerebbe
   401 e la scheda mostrerebbe un riquadro rotto. L'indirizzo resta. */
const hasMapboxToken = MAPBOX_TOKEN.length > 0;

/* Stile monocromatico, coerente con il resto del sito. */
const MAP_STYLE = 'mapbox/dark-v11';
const MAP_WIDTH = 640;
const MAP_HEIGHT = 420;
const MAP_ZOOM = 14;

interface Office {
  kind: 'legal' | 'operational';
  city: string;
  street: string;
  postalCode: string;
  province: string;
  /** Coordinate ottenute dal geocoding Mapbox dell'indirizzo. */
  longitude: number;
  latitude: number;
}

const OFFICES: readonly Office[] = [
  {
    kind: 'legal',
    city: 'Roma',
    street: 'Viale Bruno Buozzi 77',
    postalCode: '00197',
    province: 'RM',
    longitude: 12.48339,
    latitude: 41.92197,
  },
  {
    kind: 'operational',
    city: 'Latina',
    street: 'Via Vincenzo Monti 16',
    postalCode: '04100',
    province: 'LT',
    longitude: 12.910847,
    latitude: 41.466587,
  },
];

/** Immagine statica della mappa: nessuno script di terze parti a runtime. */
const buildMapUrl = ({ longitude, latitude }: Office) => {
  const marker = `pin-l+ffffff(${longitude},${latitude})`;
  const center = `${longitude},${latitude},${MAP_ZOOM},0`;

  return `https://api.mapbox.com/styles/v1/${MAP_STYLE}/static/${marker}/${center}/${MAP_WIDTH}x${MAP_HEIGHT}@2x?access_token=${MAPBOX_TOKEN}&logo=false&attribution=false`;
};

const buildDirectionsUrl = (office: Office) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${office.street}, ${office.postalCode} ${office.city}`
  )}`;

const Offices: React.FC = () => {
  const { t } = useLanguage();

  /* Le sedi chiudono il blocco dei contatti, non aprono un argomento nuovo:
     seguono sempre il modulo, in home come in Chi siamo. Da qui `tight` e
     nessun filetto in testa. */
  return (
    <Section id="offices" labelledBy="offices-title" tight divided={false}>
      <SectionHeader
        label={t('offices.label')}
        title={t('offices.title')}
        titleId="offices-title"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {OFFICES.map((office) => (
          <article key={office.city} className="panel">
            {/* Rapporto d'aspetto dichiarato: nessuno spostamento al caricamento.
                Più basso su telefono: a tutta larghezza in colonna singola la
                mappa prendeva più spazio dell'indirizzo che deve accompagnare. */}
            {hasMapboxToken && (
              <div className="aspect-[16/7] sm:aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface2">
                <img
                  src={buildMapUrl(office)}
                  alt={t(
                    office.kind === 'legal' ? 'offices.mapAltLegal' : 'offices.mapAltOperational'
                  )}
                  width={MAP_WIDTH}
                  height={MAP_HEIGHT}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-lg">
              <p className="label mb-sm">
                {t(office.kind === 'legal' ? 'offices.legal' : 'offices.operational')}
              </p>
              <h3 className="title-block mb-xs">{office.city}</h3>
              <address className="text-body-muted not-italic">
                {office.street}
                <br />
                {office.postalCode} {office.city} ({office.province})
              </address>
              <a
                href={buildDirectionsUrl(office)}
                target="_blank"
                rel="noopener noreferrer"
                className="label hover:text-ink tap-target mt-md"
              >
                {t('offices.directions')}
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="text-meta text-inkFaint mt-lg">
        Agentics SRL — {t('offices.vat')}: 03335160598
      </p>
    </Section>
  );
};

export default Offices;
