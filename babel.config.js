module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@atoms': './patterns/atoms',
            '@molecules': './patterns/molecules',
          },
        },
      ],
    ],
  };
};
