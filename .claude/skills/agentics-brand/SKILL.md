---
name: agentics-brand
description: >
  Sistema di design e linguaggio visivo del brand Agentics. Usa questa skill
  OGNI VOLTA che generi UI, componenti, sezioni, landing, grafiche, email, slide,
  social o qualsiasi superficie visiva per Agentics — così l'output è on-brand:
  canvas bianco, accento blu elettrico #0163F5, angoli netti (Swiss/editoriale),
  bordi grigi sottili, micro-label uppercase, display Montserrat, motion sobrio
  con accenti hi-tech (Hyperspeed, Spline 3D, glitch/decrypt). Trigger: "grafica
  Agentics", "componente on-brand", "in stile sito", "landing/sezione Agentics".
---

# Agentics — Brand & Design System

Agentics costruisce **software personalizzato potenziato con AI** per le aziende.
La sua identità visiva è **minimalismo svizzero/editoriale incontra il tech**:
tela bianca, un solo accento blu elettrico, superfici piatte ad angoli netti,
bordi grigi sottili, tipografia a micro-label maiuscole, e accenti di movimento
ad alta tecnologia (scie di luce, 3D, testo glitch/decrypt).

> Obiettivo della skill: qualunque cosa Claude produca per Agentics deve sembrare
> uscita da `agentics.eu.com`. Niente template generici, niente dark-mode di
> default, niente gradienti decorativi a caso, niente ombre pesanti.

## Quando usarla

Attivala per: nuovi componenti React/Tailwind, sezioni/landing page, restyling,
grafiche statiche (OG image, banner, slide, post social), email HTML, mockup.
Quando l'utente dice "fai una sezione/pagina/grafica per Agentics" o "in stile
sito", parti **da qui**, poi apri il file di riferimento che serve.

## Il DNA in una frase

> Tela **bianca** · accento **blu #0163F5** · **angoli netti** (no border-radius)
> · **bordi grigi 1px** · superfici **piatte** (no ombre) · titoli **Montserrat
> bold UPPERCASE** con tracking largo · micro-label **11px uppercase** · motion
> **fade-up sobrio** + accenti hi-tech.

## Token essenziali (quick reference)

Sempre via classi Tailwind del progetto. Dettaglio completo → [references/design-tokens.md](references/design-tokens.md).

| Token | Valore | Uso |
|-------|--------|-----|
| `graphite` | `#2C2C2C` | Testo principale, CTA scura secondaria |
| `aiblue` | `#0163F5` | Accento brand: CTA primaria, link, focus, marker |
| `neutral` | `#E6E6E6` | Bordi, divisori |
| `white` | `#FFFFFF` | Canvas / sfondo (default) |
| `#4d8ef7` | blu chiaro | Fine gradiente logo, scie luce |
| `#03b3c3` | teal | Accento secondario (solo effetti, mai UI piatta) |

Opacità ricorrenti: testo corpo `text-graphite/70`, secondario `/60`,
placeholder `/40`; hover CTA `bg-aiblue/90`; hover bordo `border-aiblue/40`;
tinte `aiblue/5` `aiblue/10`. Semantici: success `green-500/600`, error `red-500/50/600`.

**Tipografia** — Display `font-display` = **Montserrat** (600/700/800);
Body `font-body` = **Inter** (400/500/600). Solo queste due (Poppins è legacy: non usarla).

## Le 7 regole non negoziabili

1. **Angoli netti.** Bottoni, card, input, frame media → **nessun border-radius**.
   (Esistono utility `.btn rounded-full` legacy in `index.css`: NON usarle, sono superate.)
2. **Superfici piatte.** Le card sono `bg-white border border-neutral` **senza ombra**.
   La profondità nasce da bordi, overlap e movimento — non da `shadow`.
3. **Un solo accento.** Il blu `aiblue` è l'unico colore espressivo su UI. Tutto il
   resto è bianco/grafite/grigio. Il teal e i blu chiari vivono solo dentro gli effetti.
4. **Micro-label maiuscole.** Eyebrow, bottoni, nav, label form: `text-[11px]
   font-semibold uppercase` con `tracking` largo (`.08em`; eyebrow `.12em`).
5. **Titoli Montserrat.** `font-display font-bold`, titoli hero/sezione `uppercase
   tracking-[.04em]`. Corpo in Inter, `text-graphite/70 leading-relaxed`.
6. **Motion solo compositor-friendly.** `transform`/`opacity`/`filter`. Entrata
   fade-up (`y:20→0`) con `viewport={{ once: true }}`. Niente animazioni di layout.
7. **Mai dark-mode di default, mai look da template.** Bianco editoriale è la base.

## Pattern firma (riconoscibili a colpo d'occhio)

- **Marker editoriale**: barretta `w-[3px] h-8 bg-aiblue` a sinistra del titolo.
- **CTA primaria**: `bg-aiblue text-white hover:bg-aiblue/90` + `<ArrowRight size={14}/>`,
  testo `text-[11px] uppercase tracking-[.08em]`, angoli netti.
- **CTA scura**: `bg-graphite text-white hover:bg-aiblue` (inverte sull'hover).
- **Input underline**: niente box — solo `border-b-2 border-neutral focus:border-aiblue`,
  `bg-transparent`.
- **Header sezione centrato**: eyebrow blu → `h2` Montserrat → sottotitolo `graphite/70`.
- **Sezione**: `py-16 sm:py-24 md:py-32 bg-white`, container `mx-auto px-4 sm:px-6` con `max-w-*`.
- **Icone**: `lucide-react`, `strokeWidth={1.5}`–`2`. `ArrowRight` è l'icona-firma.

## File di riferimento (apri quello che serve)

- **[references/design-tokens.md](references/design-tokens.md)** — palette completa,
  scala tipografica, spaziatura, config Tailwind, equivalenti HEX/HSL/OKLCH per
  grafiche fuori dal codice (Figma, OG image, slide).
- **[references/components.md](references/components.md)** — codice copia-incolla:
  bottoni, card, badge/eyebrow, header sezione, form underline, frame media, footer.
- **[references/motion-and-effects.md](references/motion-and-effects.md)** — pattern
  Framer Motion + effetti firma (Hyperspeed, Spline 3D, decrypt/glitch/gooey text, spotlight).
- **[references/voice-and-assets.md](references/voice-and-assets.md)** — tono di voce
  IT/EN, naming, dati legali, loghi (`BASE.svg`/`BIANCO.svg`), favicon, theme color.

## Checklist prima di consegnare

- [ ] Angoli netti ovunque (no `rounded-*` sugli elementi UI)?
- [ ] Card piatte con `border border-neutral`, nessuna ombra pesante?
- [ ] `aiblue` come unico accento; resto bianco/grafite/grigio?
- [ ] Eyebrow/label `text-[11px] uppercase` con tracking largo?
- [ ] Titoli `font-display` Montserrat, corpo Inter `text-graphite/70`?
- [ ] Entrate `fade-up` con `viewport once`, solo transform/opacity?
- [ ] Spaziatura sezione `py-16 sm:py-24 md:py-32`, container con `max-w-*`?
- [ ] Sembrerebbe uno screenshot reale di agentics.eu.com?
