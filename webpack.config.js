var excludeDirs=/node_modules/;


module.exports = {
  entry: ['./client/app/app.js'],
  output: {
    fileName: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', excludes: excludeDirs},
    ]
  }
};
