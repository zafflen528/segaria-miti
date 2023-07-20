//@ts-ignore
export default  {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'main-container-width' : '64rem',
      },
      height: {
        'main-container-height' : '48rem'
      }
    },
    colors: {
      'mgrey' : '#C7CCDB',
      'offwhite': '#FAFAFA',
      'green' : '#5FAD56',
      'dark-green':'#003B36'
    },
  },
  plugins: [],
};