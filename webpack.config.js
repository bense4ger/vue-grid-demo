const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');

/*
    Setup the Extract Text plugin
    This plugin creates a css file for production
 */
const extractSass = new ExtractText({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'dev',
});

/*
    Setup our rules
    These are used to tell Webpack which
    loaders to apply to which files.  Typically these would be 'inline' or in a module
 */
const transpile = {
  test: /\.js$/,
  exclude: [/node_modules/],
  use: [{ loader: 'babel-loader' }],
};

const compileVue = {
  test: /\.vue$/,
  use: [{ loader: 'babel-loader' }, { loader: 'vue-loader' }],
};

const compileSass = {
  test: /\.scss$/,
  exclude: [/node_modules/],
  use: extractSass.extract({
    use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
    fallback: 'style-loader',
  }),
};

/*
    Setup the externals
    These are libraries that we don't want to bundle up
 */
const externals = {
  vue: 'Vue',
  vuex: 'Vuex',
  jquery: 'jQuery',
};

/*
    Setup the dev server¡¡
 */
const devServer = {
  contentBase: path.resolve(__dirname, './dist'),
  inline: true,
};

/*
    Export the main config
 */
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './vue-app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [transpile, compileVue, compileSass],
  },
  externals,
  devServer,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'common.js',
      minChunks: 2,
    }),
    extractSass,
  ],
};
