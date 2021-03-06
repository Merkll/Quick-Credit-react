const path = require('path');
const {
  htmlWebpackPlugin, extractTextPlugin, ExtractTextPlugin, definePlugin
} = require('./webpack.plugins.js');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      pages: path.resolve(__dirname, '../src/pages'),
      modules: path.resolve(__dirname, '../src/store/modules'),
      store: path.resolve(__dirname, '../src/store'),
      utils: path.resolve(__dirname, '../src/utils'),
      'react-dom': '@hot-loader/react-dom',
      scss: path.resolve(__dirname, '../src/assets/scss'),
      assets: path.resolve(__dirname, '../src/assets'),
      fixtures: path.resolve(__dirname, '...src/fixtures'),
      validations: path.resolve(__dirname, '../src/validations')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|ttf|eot|woff2?)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    extractTextPlugin,
    definePlugin
  ],
};
