const path = require('path');

module.exports = function () {
  return {
    devServer: {
      contentBase: path.resolve(__dirname),
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      host: '0.0.0.0',
      hot: true,
      publicPath: 'http://0.0.0.0:8080/',
      stats: 'minimal'
    },
    devtool: 'cheap-module-source-map',
    entry: {
      client: path.resolve(__dirname, 'client.js')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'client.js'),
          loader: 'babel-loader'
        }
      ]
    },
    mode: 'development',
    output: {
      filename: '[name].js',
      publicPath: 'http://0.0.0.0:8080/'
    },
    target: 'web'
  };
};
