const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, 
            {
                test: /\.s?css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                    // modules=true&sourceMap=false
                  })
            },
            {
                test: /\.(svg|png|eot|woff|ttf|jpe?g)/i,
                use: [        
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.min.css"),
        new CopyWebpackPlugin([
            {from:'src/assests/images',to:'assets/images'} 
        ]),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
      },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
            'assets': path.resolve(__dirname, 'src/assests/')
          }
    },
}

console.log(path.resolve(__dirname, 'src/assests'));