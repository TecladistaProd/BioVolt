module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@yupSchemas': './src/yupSchemas',
            '@screen': './src/screen',
            '@store': './src/store',
            '@interfaces': './src/interfaces'
          }
        }
      ]
    ]
  };
};
