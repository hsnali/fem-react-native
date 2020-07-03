module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            '@root': './',
            '@base': './patterns/01-base',
            '@atoms': './patterns/02-atoms',
            '@molecules': './patterns/03-molecules',
            '@components': './patterns/04-components',
            '@screens': './patterns/07-screens',
          },
        },
      ],
    ],
  };
};
