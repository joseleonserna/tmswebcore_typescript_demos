//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  // devtool: "nosources-source-map",
  devtool: 'eval-source-map',
  entry: {
    main: "./TMSWEB_Pictures.ts",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "TMSWEB_Pictures.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer :
  {
    client: {
      overlay: false,
    },
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { allowTsInNodeModules: true }
      },
    ]
  }
};