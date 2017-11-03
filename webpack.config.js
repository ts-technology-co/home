module.exports = {
  devServer: {
    inline: true,
    port: 8080
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
          presets: ["env", "react"]
        }
      }
    ]
  }
};
