const path = require('path');

module.exports = {
  entry: './src/sharedData.js', // Entry point of your shared module
  output: {
    filename: 'sharedData.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    library: 'sharedData',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile ES6 to ES5
          options: {
            presets: ['@babel/preset-env'] // Use @babel/preset-env for ES6 features
          }
        }
      }
    ]
  },
  mode: 'production' // Set the mode to production
};