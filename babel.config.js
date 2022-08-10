const pak = require('./package.json');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@Components': './src/Components',
          '@Navigator': './src/Navigator',
          '@screens': './src/screens',
          '@common': './src/common',
        },
      },
    ],
  ],
};
