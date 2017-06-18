module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'precss': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};
