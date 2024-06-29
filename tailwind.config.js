module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
      },
      backgroundColor: {
        'custom-gold': '#c19b76',
      },
      textColor: {
        'custom-gold': '#c19b76',
        'custom-white': '#fff',
      },
      keyframes: {
        'scale-x': {
          '0%': { transform: 'scaleX(0.9)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'scale-x': 'scale-x 0.3s ease',
      },
    },
  },
  plugins: [],
};
