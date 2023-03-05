
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    
    container: {
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',
      }
    },
    extend: {
      colors: {
      primary: '#315300',
      secondary: '#d5ff40',
      gray1: '#292929',
      gray2: '#4f4f4f',
      gray3: '#c4c4c4',
      },
    },
    fontFamily: {
      'sans': ['DM Sans','sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'archivo': ['Archivo Black', 'sans-serif'],
      'blackops': ['Black Ops One', 'cursive'],

    },
  },
  plugins: [],
}
