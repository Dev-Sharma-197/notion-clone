import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      backdropBlur: {
        '8': '8px',
      },
      colors: {
        'backdrop-color': 'rgba(0,0,0,.4)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'header-gradient-1': {
          '0% ': { transform: 'translate(-35%, -65%) scale(1)' },
          '33%': { transform: 'translate(-29%, -58%) scale(1.4)' },
          '66%': { transform: 'translate(-38%, -67%) scale(.8)' },
          '100%': { transform: 'translate(-35%, -65%) scale(1)' }
        },
        'header-gradient-2': {
          '0%': { transform: 'translate(-2%, -18%) scale(1) rotate(-9deg)' },
          '33%': { transform: 'translate(-9%, -12%) scale(.9) rotate(-9deg)' },
          '66%': { transform: 'translate(4%, -23%) scale(1.3) rotate(-9deg)' },
          '100%': { transform: 'translate(-2%, -18%) scale(1) rotate(-9deg)' },
        },
        'header-gradient-3': {
          '0%': { transform: 'translate(-102%, -52%) scale(1) rotate(-9deg)' },
          '33%': { transform: 'translate(-89%, -56%) scale(1.5) rotate(-9deg)' },
          '66%': { transform: 'translate(-105%, -47%) scale(.8) rotate(-9deg)' },
          '100%': { transform: 'translate(-102%, -52%) scale(1) rotate(-9deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'header-gradient-1': 'header-gradient-1 5s ease-in-out infinite alternate',
        'header-gradient-2': 'header-gradient-2 4s ease-in-out infinite alternate',
        'header-gradient-3': 'header-gradient-3 3s ease-in-out infinite alternate',
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
  ]
};

export default config;
