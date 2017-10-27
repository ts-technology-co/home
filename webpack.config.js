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
      { test: /\.png/,  loader: "file-loader" },
      { test: /\.jpeg/,  loader: "file-loader" },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
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
