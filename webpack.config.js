const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'app/'),
        from: 'index.html',
        to: path.resolve(__dirname, 'docs'),
      },
      {
        context: path.resolve(__dirname, 'app/'),
        from: 'assets',
        to: path.resolve(__dirname, 'docs/assets'),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
};
