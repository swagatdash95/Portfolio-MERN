const path = require('path');
module.exports = {
  entry:'./src/index.js',
  output:{
    path: path.resolve('public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      // {
      //   test: /\.json$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'json-loader',
      //   }
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif|eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
};
