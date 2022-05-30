module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      fontFamily: {
        title: ['Oleo Script', 'cursive']
      },
      colors: {
        'headings': '#0F298B',
        'primary': '#2549D3',
        'neutral-c4': '#C4C4C4',
      },
      borderRadius: {
        'curved': '45%',
      }
    },
  },
  plugins: [],
}
