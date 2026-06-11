module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': false
      }
    },
    'autoprefixer': {},
  },
};
