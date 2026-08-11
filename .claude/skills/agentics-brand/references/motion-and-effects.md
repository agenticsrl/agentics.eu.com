# Agentics — Motion & Effetti firma

Due livelli di movimento:
1. **Motion sobrio** (Framer Motion) su quasi tutto: entrate fade-up, hover lift, tap.
2. **Effetti hi-tech firma** (Three.js / Spline / canvas) usati con parsimonia per dare
   il tono "AI/tech" senza sporcare il minimalismo.

Regola d'oro: anima **solo** `transform`, `opacity`, `filter`, `clip-path`. Mai
larghezza/altezza/top/left/margin. Rispetta sempre `prefers-reduced-motion`.

---

## 1. Framer Motion — pattern ricorrenti

### Entrata fade-up (il default per ogni blocco)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  …
</motion.div>
```

Varianti: `y: 30` o `y: 40` per blocchi più grandi; `duration: 0.8` per hero/header.
In hero si usa `animate` (non `whileInView`) perché è già a schermo.

### Stagger (entrate a cascata)

Aggiungi `delay` crescente: `0.1, 0.2, 0.3, …`. Negli input form si alterna
`x: -20` / `x: 20` per far entrare le colonne da lati opposti.

```tsx
transition={{ duration: 0.5, delay: 0.2 }}
```

### Hover lift (card)

```tsx
<motion.div whileHover={{ y: -4 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}>
```

### Tap

```tsx
<motion.button whileTap={{ scale: 0.98 }}>   {/* icone: scale: 0.9 */}
```

### Entrata navbar

```tsx
<motion.nav initial={{ y: -100 }} animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 20 }}>
```

### Menu mobile (height auto)

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>…</motion.div>
  )}
</AnimatePresence>
```

### Shared layout (espansione card → dettaglio)

Le feature card usano `layoutId` (`layoutId`, `icon-${id}`, `title-${id}`,
`description-${id}`) per transizioni morphing tra card e vista espansa.

---

## 2. Animazioni CSS (in `src/index.css`)

| Classe / keyframe | Effetto |
|-------------------|---------|
| `.nav-link::after` | Underline blu (`#0163F5→#4d8ef7`) che cresce da 0 a 100% in hover |
| `.fade-in` | `fadeIn 0.8s` — opacity + translateY(20px→0) |
| `.arrow-float` | Freccia che oscilla in x (`float 1.5s infinite`) |
| `.logo-text-glow` | Testo gradiente con `textGlow` (drop-shadow blu pulsante) |
| `.animate-spotlight` | Entrata spotlight (scale + translate, 2s) |
| `.modern-button::after` | Ripple radiale bianca in hover |
| Easing firma | `cubic-bezier(0.4, 0, 0.2, 1)` |

Gradiente testo logo:

```css
background: linear-gradient(90deg, #0163F5, #4d8ef7);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 3. Effetti firma hi-tech (libreria del sito)

Componenti già presenti in `src/components/` e `src/components/ui/`. Riusali, non
reinventarli. Stack: `three`, `@splinetool/react-spline`, `gsap`, `postprocessing`.

| Componente | File | Quando usarlo |
|-----------|------|---------------|
| **Hyperspeed** | `components/Hyperspeed.tsx` | Sfondo hero: scie di luce 3D (Three.js). Nel sito a `opacity-70` su bianco |
| **SplineScene** | `components/ui/splite.tsx` | Oggetto 3D interattivo (hero About). `<SplineScene scene="…splinecode" />` |
| **Spotlight** | `components/ui/spotlight.tsx` | Cono di luce SVG su card scure/hero. `fill="#0163F5"` |
| **DecryptedText** | `components/ui/decrypted-text.tsx` | Testo che si "decritta" carattere per carattere |
| **GooeyText** | `components/ui/gooey-text-morphing.tsx` | Morphing fluido tra parole |
| **LetterGlitch** | `components/LetterGlitch.tsx` | Griglia di caratteri glitch (tono cyber) |
| **LogoLoop** | `components/ui/LogoLoop.tsx` | Marquee infinito di loghi/tech |
| **ScrollFloat** | `components/ui/scroll-float.tsx` | Reveal del testo legato allo scroll (GSAP) |
| **ContainerScroll** | `components/ui/container-scroll-animation.tsx` | "Device" che si raddrizza allo scroll |
| **Entropy** | `components/ui/entropy.tsx` | Campo particellare generativo |
| **Timeline** | `components/ui/timeline.tsx` | Timeline verticale animata |

### Palette degli effetti Hyperspeed (per coerenza)

```js
colors: {
  roadColor: 0xffffff, islandColor: 0xffffff, background: 0xffffff,
  shoulderLines: 0xf0f0f0, brokenLines: 0xf0f0f0,
  leftCars:  [0x0163F5, 0x03b3c3, 0x4d8ef7],
  rightCars: [0x0163F5, 0x03b3c3, 0x4d8ef7],
  sticks: 0x0163F5,
}
```

Qui — e solo qui, dentro gli effetti — è ammesso il teal `#03b3c3` e il blu chiaro
`#4d8ef7` accanto all'`aiblue`. Sulla UI piatta resta un solo accento.

---

## 4. Performance & accessibilità

- Importa le librerie pesanti in modo dinamico quando possibile
  (`const gsap = await import('gsap')`), e monta gli effetti 3D solo quando in viewport.
- Tieni gli effetti firma **uno per schermata**: sono accenti, non wallpaper.
- Onora `prefers-reduced-motion`: disattiva Hyperspeed/glitch e riduci le entrate a
  semplici fade.
- Mantieni i target CWV del progetto (LCP < 2.5s, CLS < 0.1): gli effetti non devono
  bloccare il rendering dell'hero testuale.
