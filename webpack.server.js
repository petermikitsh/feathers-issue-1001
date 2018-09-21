const nodeExternals = require('webpack-node-externals');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = function () {
  return {
    devtool: 'cheap-eval-source-map',
    entry: [
      './server.js'
    ],
    externals: [
      nodeExternals()
    ],
    mode: 'development',
    module: {
      rules: [{
        test: /\.js$/,
        include: [
          path.resolve(__dirname),
        ],
        loader: 'babel-loader'
      }]
    },
    output: {
      filename: 'server.js'
    },
    plugins: [
      new StartServerPlugin('server.js')
    ],
    target: 'node',
    watch: true
  };
};
