/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      /* Palette monocromatica: nero, bianco, grigi neutri. Nessun accento. */
      colors: {
        canvas: '#0A0A0A', // fondo pagina
        surface: '#111111', // pannello / riga tabella
        surface2: '#171717', // pannello elevato / hover
        line: '#242424', // separatore hairline
        lineStrong: '#333333', // separatore in evidenza

        ink: '#F5F5F5', // testo primario
        inkMuted: '#A3A3A3', // testo secondario
        inkFaint: '#737373', // testo terziario / placeholder

        plate: '#FFFFFF', // fondo chiaro per loghi cliente
        plateSoft: '#D4D4D4', // fondo chiaro attenuato per scene 3D e media
        white: '#FFFFFF',
        black: '#000000',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },

      /* Un'unica larghezza di contenuto per tutto il sito */
      maxWidth: {
        content: '1120px',
      },

      /* Scala di spaziatura: unica fonte per padding, gap e ritmo verticale */
      spacing: {
        xs: '0.5rem', // 8
        sm: '1rem', // 16
        md: '1.5rem', // 24
        lg: '2rem', // 32
        xl: '3rem', // 48
        '2xl': '4rem', // 64
        section: '5rem', // 80  — ritmo verticale mobile
        'section-lg': '7rem', // 112 — ritmo verticale desktop
        header: '4.5rem', // 72  — altezza header, fissa
      },

      /* Gerarchia contenuta: nessun titolo sovradimensionato */
      fontSize: {
        label: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.1em' }], // 11px
        meta: ['0.8125rem', { lineHeight: '1.5' }], // 13px
        body: ['0.9375rem', { lineHeight: '1.7' }], // 15px
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }], // 17px
        h4: ['1rem', { lineHeight: '1.4' }], // 16px
        h3: ['1.125rem', { lineHeight: '1.35' }], // 18px
        h2: ['1.5rem', { lineHeight: '1.25' }], // 24px
        h1: ['2rem', { lineHeight: '1.2' }], // 32px
        'h1-lg': ['2.5rem', { lineHeight: '1.15' }], // 40px — massimo del sito
      },

      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
};
