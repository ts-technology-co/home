module.exports = {
  devServer: {
    inline:true,
    port: 3000
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.png/,  loader: "url-loader" },
      { test: /\.jpeg/,  loader: "url-loader" },
      { test: /\.css$/, loader: "css-loader" },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["env", "react"]
        }
      }
    ]
  }
};
