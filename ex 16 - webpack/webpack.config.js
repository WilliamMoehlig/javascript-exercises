// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  return {
    entry: './src/main.js',
    output: {
      filename:  devMode ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/, // apply babel-loader for any js file
          loader: 'babel-loader',
          exclude: /node_modules/ // except in node_modules
        },
        {
          test:  /\.(sa|sc|c)ss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=4000'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html'})
      ],
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'src'),
      historyApiFallback: true, // support for html5 mode
      noInfo: true, // limit output
      proxy: {
        // proxy all url from /api to ...
        '/api': {
          target: 'https://other-server.example.com'
        }
      }
    }
  };
};