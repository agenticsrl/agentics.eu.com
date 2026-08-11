# Agentics — Design Tokens

Fonte di verità: `tailwind.config.js` + `src/index.css` del sito. Usa **sempre**
le classi Tailwind del progetto. Gli HEX/HSL/OKLCH qui sotto servono per grafiche
fuori dal codice (Figma, OG image, slide, email).

## 1. Colori

### Brand core

| Nome | Tailwind | HEX | HSL | Ruolo |
|------|----------|-----|-----|-------|
| Graphite | `graphite` | `#2C2C2C` | `0 0% 17%` | Testo principale, superficie scura, CTA secondaria |
| AI Blue | `aiblue` | `#0163F5` | `215 100% 48%` | **Accento unico**: CTA primaria, link, focus, marker, icone attive |
| Neutral | `neutral` | `#E6E6E6` | `0 0% 90%` | Bordi, divisori, linee form |
| White | `white` | `#FFFFFF` | `0 0% 100%` | Canvas / sfondo (default) |

### Accenti estesi (solo dentro effetti/gradienti, MAI su UI piatta)

| HEX | Uso |
|-----|-----|
| `#4d8ef7` | Fine del gradiente logo, scie Hyperspeed |
| `#03b3c3` | Teal — scie luce Hyperspeed (`leftCars`/`rightCars`) |
| `#f0f0f0` | Linee strada effetto Hyperspeed |

Gradiente logo ufficiale: `linear-gradient(90deg, #0163F5, #4d8ef7)`.

### Opacità ricorrenti (la "scala di grigi" del brand)

Il brand NON usa molti grigi distinti: deriva i toni con l'alpha di `graphite`/`aiblue`.

| Classe | Uso tipico |
|--------|-----------|
| `text-graphite/70` | Corpo testo / paragrafi |
| `text-graphite/60` | Testo secondario nelle card |
| `text-graphite/40` | Placeholder input |
| `border-graphite/30` | Bordo bottone outline |
| `bg-graphite/5` | Riempimento leggero / skeleton media |
| `bg-aiblue/90` | Hover CTA primaria |
| `border-aiblue/40` | Hover bordo card |
| `bg-aiblue/5` · `bg-aiblue/10` | Tinte hover/active su link testuali |

### Semantici

| Stato | Classi |
|-------|--------|
| Success | `bg-green-500`, testo `text-green-600` |
| Error | bordo `border-red-500`, sfondo `bg-red-50`, testo `text-red-600` |

### Token shadcn (HSL CSS vars in `index.css`, per i componenti `ui/`)

```css
--background: 0 0% 100%;      /* white */
--foreground: 0 0% 17%;       /* ~graphite */
--primary: 215 100% 48%;      /* ~aiblue */
--primary-foreground: 0 0% 100%;
--secondary: 0 0% 90%;        /* neutral */
--muted: 0 0% 96%;
--muted-foreground: 0 0% 45%;
--border: 0 0% 90%;
--ring: 215 100% 48%;         /* focus = aiblue */
--destructive: 0 84% 60%;
```

### Equivalenti OKLCH (per tooling moderno / grafiche)

```
white    → oklch(100% 0 0)
graphite → oklch(28.7% 0 0)        /* #2C2C2C */
aiblue   → oklch(57.7% 0.224 258)  /* #0163F5 */
neutral  → oklch(92.4% 0 0)        /* #E6E6E6 */
```

## 2. Tipografia

Caricate via Google Fonts in `index.html`:
`Inter:wght@400;500;600` · `Montserrat:wght@600;700;800` (Poppins è legacy, **non usare**).

| Ruolo | Famiglia | Tailwind | Pesi |
|-------|----------|----------|------|
| Display / titoli | **Montserrat** | `font-display` | 600 / 700 / 800 |
| Corpo / UI | **Inter** | `font-body` | 400 / 500 / 600 |

`body` ha `font-body text-graphite bg-white`; gli `h1–h6` ereditano `font-display font-bold`.

### Scala d'uso (classi reali dal sito)

| Elemento | Classi |
|----------|--------|
| Hero title | `font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-[.04em]` |
| Section title (`h2`) | `font-display font-bold text-2xl sm:text-3xl md:text-4xl text-graphite tracking-tight` (hero/contact: `uppercase tracking-[.04em]`) |
| Card title (`h3`) | `font-display font-semibold text-base sm:text-xl text-graphite leading-tight` |
| Eyebrow / badge | `text-[11px] font-semibold uppercase tracking-[.12em] text-aiblue` |
| Button / nav / label | `text-[11px] font-semibold uppercase tracking-[.08em]` |
| Lang toggle | `text-[11px] font-semibold uppercase tracking-[.06em]` |
| Body lead | `text-lg sm:text-xl text-graphite/70 leading-relaxed` |
| Body / card copy | `text-sm sm:text-base text-graphite/70 leading-relaxed` (card: `text-xs sm:text-sm text-graphite/60`) |

Regola tracking: titoli display `[.04em]` (o `tracking-tight`); micro-label `[.08em]`;
eyebrow `[.12em]`. Le micro-label sono **sempre uppercase**.

## 3. Forma & superfici

- **Border-radius: 0.** Nessun angolo arrotondato su bottoni/card/input/frame.
  (L'unica eccezione mai-su-UI: spinner di caricamento circolare.)
- **Bordo standard**: `border border-neutral` (1px). Variante marcata: `border-2 border-neutral`.
- **Card**: `bg-white border border-neutral` piatta (`shadow-none`), hover `border-aiblue/40`,
  `transition-colors duration-200`.
- **Marker editoriale**: `w-[3px] h-8 bg-aiblue` prima del titolo.
- **Frame media**: `aspect-video overflow-hidden border border-neutral`, fill `bg-graphite/5`.
- **Divisori**: `border-t border-neutral`, oppure `divide-x/divide-y divide-gray-200`.

## 4. Spaziatura & layout

| Token | Valore |
|-------|--------|
| Padding sezione | `py-16 sm:py-24 md:py-32` (talvolta `lg:py-32`) |
| Container | `container mx-auto px-4 sm:px-6` |
| Larghezze interne | `max-w-7xl` (griglie) · `max-w-6xl` (case study) · `max-w-4xl` (testo/hero/form) · `max-w-3xl`/`max-w-2xl` (paragrafi) |
| Gap griglia | `gap-6 lg:gap-8` |
| Padding card | `p-3 sm:p-8` · form `p-8 sm:p-10 md:p-12` |

Breakpoint extra nel config: `xs: 475px` (oltre ai default Tailwind 640/768/1024/1280/1536).

## 5. Motion tokens

| Token | Valore |
|-------|--------|
| Durata micro (hover/color) | `duration-200` |
| Durata transizione | `duration-300` – `duration-500` |
| Entrata Framer | `0.6s`–`0.8s`, fade-up `y: 20/30/40 → 0` |
| Hover lift | `whileHover={{ y: -4 }}`, spring `stiffness: 300, damping: 30` |
| Tap | `whileTap={{ scale: 0.98 }}` (icone `0.9`) |
| Easing CSS firma | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Float keyframe | `float 6s ease-in-out infinite` (config) |

Dettaglio motion + effetti firma → [motion-and-effects.md](motion-and-effects.md).
