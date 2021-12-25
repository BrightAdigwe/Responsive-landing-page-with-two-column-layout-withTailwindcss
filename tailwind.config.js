module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'xl': '1320px',
    },
    extend: {
      colors: {
        'blue-dark': '#070439',
        'blue-desaturated': '#585989',
        'blue-bright': '#3065f8',
        'cyan-moderate': '#3c9f8f',
        'gray-light-blue': '#f8f8fe',
        'gray-light': '#bfbfbf',
      },
    },
    fontFamily: {
      'heading': ['Raleway'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}

