module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container: {
      screens:{
        sm: '640px',
        sm: '768px',
        sm: '1024px',
        sm: '1080px',
      }
    },
    extend: {},
    fontFamily: {
      'sans': ['DM Sans','sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
