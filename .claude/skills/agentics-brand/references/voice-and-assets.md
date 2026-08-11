# Agentics — Tono di voce, contenuti & asset

## 1. Chi è Agentics

**Agentics SRL** sviluppa **software personalizzato potenziato con AI** per
automatizzare i processi delle aziende: soluzioni su misura + automazioni operative.
Target principale: **PMI italiane**. Sito bilingue **IT / EN** (IT è la lingua primaria).

Posizionamento: partner tecnologico concreto che porta l'AI dentro l'operatività
aziendale — non hype, ma risultati misurabili.

## 2. Tono di voce

- **Professionale ma diretto.** Frasi chiare, orientate al beneficio per l'azienda.
- **Concreto, non buzzword.** Si parla di automazione di processi, software su
  misura, efficienza — non di "rivoluzione" generica.
- **Italiano primario**, con versione EN equivalente (mai traduzione letterale rigida).
- **Niente trattini lunghi (—) nel copy IT pubblicato**: il brand li ha rimossi
  (vedi storia commit). Usa virgole, due punti o frasi separate.

### Frasi-chiave / claim ufficiali

- Tagline: **"Software personalizzato potenziato con AI per la tua azienda"**
- "Automatizza la tua azienda: soluzioni su misura e automazioni operative."
- Categorie servizi: *Automazione intelligente* · *Sviluppo su misura*.

### Microcopy UI

- CTA tipiche: `Inizia ora`, `Contattaci`, `Scopri di più`, `Richiedi una consulenza`.
- Label form sempre UPPERCASE corte: `NOME`, `EMAIL`, `TELEFONO`, `AZIENDA`, `MESSAGGIO`.
- Tono dei messaggi di successo: rassicurante e umano ("Ti ricontattiamo a breve").

> Le stringhe reali vivono in `src/lib/translations.ts` (oggetti `it` / `en`).
> Per nuove UI nel sito, aggiungi le chiavi lì e usa `useLanguage().t('...')`,
> non testo hardcoded.

## 3. Dati aziendali (per footer, legal, schema, email)

| Campo | Valore |
|-------|--------|
| Ragione sociale | **Agentics SRL** |
| Indirizzo | Via Vincenzo Monti 16, Latina (LT), Italia |
| Email | `info@agentics.eu.com` |
| P.IVA / Tax ID | `03335160598` |
| Fondazione | 2024 |
| Sito | https://agentics.eu.com |
| LinkedIn | https://www.linkedin.com/company/agentics-srl/ |
| Copyright | `© 2026 Agentics SRL` |

## 4. Loghi & asset (in `public/`)

| File | Uso |
|------|-----|
| `/BASE.svg` | Logo principale (default, su sfondo chiaro). Footer, About schema |
| `/BIANCO.svg` | Logo "bianco" — nella navbar ricolorato in `aiblue` via `filter` |
| `/favicon.svg` · `/favicon.ico` · `/favicon-96x96.png` | Favicon |
| `/web-app-manifest-192x192.png` · `512x512.png` | PWA / OG image |
| `/Frame.svg` | Logo case study FolioFox |

Ricolorazione logo in `aiblue` (filtro usato nella navbar):

```css
filter: brightness(0) saturate(100%) invert(22%) sepia(98%)
        saturate(6952%) hue-rotate(217deg) brightness(101%) contrast(107%);
```

### Meta / theme

- `theme-color` / `msapplication-TileColor`: **`#0163F5`**
- `lang="it"`, `og:locale="it_IT"`, `og:type="website"`, `og:site_name="Agentics"`
- OG image: `web-app-manifest-512x512.png` (512×512)

## 5. Regole per grafiche statiche (OG, social, slide, email)

Quando produci grafiche fuori dal codice, applica lo stesso DNA:

- **Sfondo bianco** (`#FFFFFF`) come base. Dark solo se richiesto esplicitamente.
- **Un accento**: `#0163F5`. Testo in `#2C2C2C`. Linee/divisori `#E6E6E6`.
- **Titoli Montserrat Bold UPPERCASE** con tracking ampio; corpo **Inter**.
- **Angoli netti**, nessuna ombra morbida, nessun gradiente decorativo su superfici
  piene (il gradiente `#0163F5→#4d8ef7` è ammesso solo sul lettering/logo).
- **Marker blu** (barretta verticale `#0163F5`) come elemento grafico ricorrente.
- Tanto **respiro/bianco**: composizione editoriale, gerarchia per scala, non per colore.
- Logo: `BASE.svg` su chiaro, `BIANCO.svg`/versione blu su scuro.
