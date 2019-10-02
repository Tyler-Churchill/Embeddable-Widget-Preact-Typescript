const webpack = require('webpack'); // to access built-in plugins

const path = require('path');
const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const widgetConfig = require('./widget.config.json')
const pkg = require('./package.json')

const defaultConfig = {
    mode: 'development',
    devServer: {
      contentBase: publicDir,
      port: 9000,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin({protectWebpackAssets: false}),
      new CopyPlugin([
        { from: 'public', to: '.' },
      ])
    ],
    module: {
      rules: [
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader"
                }
            ]
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
  };
  
  module.exports = [{
    ...defaultConfig,
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    entry: './src/EmbeddableWidget.tsx',
    output: {
      path: distDir,
      publicPath: '/',
      filename: `${widgetConfig.widgetName}-${pkg.version}.js`,
      library: `${widgetConfig.widgetName}`,
      libraryExport: 'default',
      libraryTarget: 'window',
    },
  }];