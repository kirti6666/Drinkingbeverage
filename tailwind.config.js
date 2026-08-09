/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: { xs: '400px' },
      colors: {
        navy: 'rgb(var(--navy-rgb) / <alpha-value>)',
        'navy-deep': 'rgb(var(--navy-deep-rgb) / <alpha-value>)',
        orange: 'rgb(var(--orange-rgb) / <alpha-value>)',
        'orange-deep': 'rgb(var(--orange-deep-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        mist: 'rgb(var(--mist-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        brand: 'var(--radius)',
      },
      maxWidth: {
        shell: '1200px',
      },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(14px)' }, '100%': { opacity: 1, transform: 'none' } },
        drift: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        rise: 'rise .7s cubic-bezier(.2,.7,.3,1) both',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
