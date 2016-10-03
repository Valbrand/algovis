const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/docs/index.jsx',

  devtool: 'source-map',

  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /.js$/,
        loader: 'source-map-loader',
      },
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: [ 'es2015', 'react' ] },
      },
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.scss$/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ],
      },
    ],
  },
  postcss () {
    return [autoprefixer];
  },
};
