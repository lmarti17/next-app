module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '2/1': [2, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
    },
    fontFamily: {
      // suisse: ["Suisse", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
    },
    fontSize: {
      // [font size, line height]
      // min: ['0.625rem', '1'], // 10px
      // 'min-wide': ['0.75rem', '1'], // 12px
      // xs: ['0.875rem', '1.28'], // 14px
      // 'xs-wide': ['1rem', '1.25'], // 16px
      // sm: ['1.125rem', '1.33'], // 18px
      // 'sm-wide': ['1.25rem', '1.2'], // 20px
      // base: ['1.375rem', '1.27'], // 22px
      // 'base-wide': ['1.5rem', '1'], // 24px
      // md: ['1.75rem', '1'], // 28px
      // 'md-wide': ['2.125rem', '1'], // 34px
      // lg: ['3.5rem', '1'], // 56px
      // 'lg-wide': ['5rem', '1'], // 80px
      // max: ['7.5rem', '1'], // 120px
    },
    fontWeight: {
      // normal: 400,
      // medium: 500,
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      red: '#FF0000',
    },
    letterSpacing: {
      // none: "0px",
      // default: "0.1px",
      // wider: "0.2px",
      // max: "0.5px",
    },
    opacity: {
      // "0": "0",
      // "10": ".1",
      // "20": ".2",
      // "30": ".3",
      // "40": ".4",
      // "50": ".5",
      // "60": ".6",
      // "70": ".7",
      // "80": ".8",
      // "90": ".9",
      // "100": "1",
    },
  },
  variants: {},
  plugins: [require('tailwindcss-aspect-ratio')],
}
