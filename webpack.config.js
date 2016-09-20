module.exports = {
  
  // This code will be compiled 
  entry: "./app/app.jsx",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  }
}