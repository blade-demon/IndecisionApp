const path = require("path");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
