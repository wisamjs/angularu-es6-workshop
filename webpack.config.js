var excludeDirs=/node_modules/;


module.exports = {
  entry: ['./client/app/app.js'],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    preLoaders: [
      {test: /\.js$/ , exclude: excludeDirs ,loader: 'eslint-loader'}
    ],
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: excludeDirs},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'}
      ]
  }
};
