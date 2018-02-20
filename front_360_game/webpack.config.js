 module.exports = {
     entry: './src/app.js',
     output: {
         path: __dirname + '/static/dist',
         filename: 'app.bundle.js'
     },
    module: {
        loaders: [{
          test: /\.html$/,
          loader: "html-loader"
        }]
    }
 };