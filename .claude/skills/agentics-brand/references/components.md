# Agentics — Pattern di componenti (copia-incolla)

Snippet React + Tailwind allineati 1:1 al sito. Tutti gli angoli sono **netti**.
Icone da `lucide-react`. Animazioni da `framer-motion` (vedi
[motion-and-effects.md](motion-and-effects.md)). Helper classi: `cn` da `@/lib/utils`.

---

## Bottoni

### CTA primaria (blu) — la più usata

```tsx
<button
  onClick={onClick}
  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3
             bg-aiblue text-white hover:bg-aiblue/90
             text-[11px] sm:text-xs font-semibold uppercase tracking-[.08em]
             transition-colors duration-200"
>
  {label}
  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
</button>
```

### CTA scura (inverte sull'hover) — secondaria

```tsx
<button
  className="inline-flex items-center justify-center gap-2 px-8 py-4
             bg-graphite text-white hover:bg-aiblue
             text-[11px] font-semibold tracking-[.08em]
             transition-colors duration-200 group/button"
>
  {label}
  <ArrowRight size={18} className="group-hover/button:translate-x-1 transition-transform" />
</button>
```

### Outline / toggle (es. lingua)

```tsx
<button className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[.06em]
                   border border-graphite/30 text-graphite
                   hover:border-aiblue hover:text-aiblue transition-colors duration-200">
  EN
</button>
```

### Link testuale "Scopri di più"

```tsx
<button className="inline-flex items-center gap-1.5 text-aiblue
                   text-[11px] font-semibold uppercase tracking-[.06em]
                   py-2 hover:bg-aiblue/5 active:bg-aiblue/10 transition-colors duration-200 group">
  <span>Scopri di più</span>
  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
</button>
```

> Per i componenti `ui/button.tsx` (shadcn/CVA) usa `variant="default"` (= primary)
> SOLO dentro contesti già shadcn. Per nuove superfici brand, preferisci gli snippet sopra.

---

## Eyebrow / badge di sezione

```tsx
<span className="inline-block text-[11px] font-semibold text-aiblue
                 tracking-[.12em] uppercase mb-4">
  Case Study
</span>
```

---

## Header di sezione (centrato)

```tsx
<div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
  <span className="inline-block text-[11px] font-semibold text-aiblue tracking-[.12em] uppercase mb-4">
    {eyebrow}
  </span>
  <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-graphite
                 mb-8 tracking-tight leading-tight">
    {title}
  </h2>
  <p className="text-lg sm:text-xl text-graphite/70 leading-relaxed max-w-3xl mx-auto">
    {subtitle}
  </p>
</div>
```

---

## Marker editoriale + titolo (stile "About")

```tsx
<div className="flex items-center gap-3 mb-4">
  <div className="w-[3px] h-8 bg-aiblue" />
  <h3 className="font-display font-semibold text-lg text-graphite">{title}</h3>
</div>
<p className="text-graphite/70 leading-relaxed pl-4">{body}</p>
```

Tris di colonne con divisori (responsive):

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
  {/* ogni colonna: py-8 md:py-0 md:px-8 */}
</div>
```

---

## Card feature (con hover lift)

```tsx
<motion.div
  className="group cursor-pointer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ y: -4 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  <div className="relative h-full bg-white border border-neutral hover:border-aiblue/40
                  p-3 sm:p-8 transition-colors duration-200">
    <div className="w-9 h-9 sm:w-12 sm:h-12 bg-aiblue flex items-center justify-center sm:mb-6">
      <Icon size={18} className="text-white sm:w-6 sm:h-6" strokeWidth={1.5} />
    </div>
    <h3 className="font-display font-semibold text-base sm:text-xl text-graphite leading-tight sm:mb-3">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-graphite/60 leading-relaxed sm:mb-6">
      {description}
    </p>
  </div>
</motion.div>
```

> L'icona può stare su un quadrato pieno `bg-aiblue` (o `bg-graphite`). Niente angoli arrotondati.

---

## Frame media (immagine / video / iframe)

```tsx
<div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden border border-neutral">
  <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
  {/* oppure <iframe className="w-full h-full" ... /> */}
</div>
```

Card "case study" (media + testo + CTA):

```tsx
<div className="relative bg-white overflow-hidden border border-neutral">
  <div className="aspect-video w-full overflow-hidden bg-graphite/5">
    <img src={shot} className="w-full h-full object-cover object-top" />
  </div>
  <div className="p-8 sm:p-10 bg-white border-t border-neutral
                  flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
    <div className="flex-1 space-y-3">
      <p className="text-base text-graphite/70 leading-relaxed">{paragraph}</p>
    </div>
    {/* CTA scura qui */}
  </div>
</div>
```

---

## Form (input underline)

Lo stile-firma dei form: niente box, solo riga inferiore che si accende di blu al focus.

```tsx
<label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-[.08em] text-graphite mb-3">
  {label} *
</label>
<input
  id={id} name={name} type="text" value={value} onChange={onChange} required
  placeholder={placeholder}
  className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral focus:border-aiblue
             outline-none transition-colors duration-200
             text-graphite placeholder-graphite/40 text-sm"
/>
```

Contenitore form: `border-2 border-neutral bg-white` con `p-8 sm:p-10 md:p-12`.
Submit = CTA primaria a piena larghezza (`w-full py-4`). Checkbox privacy:
`accent-aiblue`, testo `text-xs text-graphite/70`, link `text-aiblue underline font-semibold`.

Messaggio di errore:

```tsx
<div className="border-l-[3px] border-red-500 bg-red-50 pl-4 py-3 text-sm text-red-600 font-medium">
  {error}
</div>
```

---

## Sezione (wrapper standard)

```tsx
<section className="py-16 sm:py-24 md:py-32 bg-white">
  <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
    {/* contenuto */}
  </div>
</section>
```

---

## Navbar (comportamento)

- `fixed top-0` con entrata `initial={{ y: -100 }}` → spring `stiffness: 100, damping: 20`.
- Trasparente in cima; allo scroll (`scrollY > 10`) diventa `bg-white border-b border-neutral`.
- Link: classe `nav-link` (underline blu animato in `index.css`) + `text-[11px] uppercase
  tracking-[.08em] text-graphite hover:text-aiblue`.
- Logo: `/BIANCO.svg` ricolorato in `aiblue` via `filter`, oppure `/BASE.svg`.

## Footer

Usa `@/components/ui/footer` con `logo={<img src="/BASE.svg" className="h-16" />}`,
`socialLinks` (LinkedIn, Mail), `mainLinks`, `legalLinks` (Privacy, Terms),
`copyright: "© 2026 Agentics SRL"`.
