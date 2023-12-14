module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '576px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['calibri', 'Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
}
