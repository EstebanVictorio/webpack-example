const path = require("path")
const dotenv = require("dotenv")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")


dotenv.config()

const developmentOutputPath = path.resolve(__dirname, "public")
const productionOutputPath = path.resolve(__dirname,"dist")

const outputPath = (
  process.env.NODE_ENV === "production" && productionOutputPath
) || developmentOutputPath

const output = {
  path: outputPath
}

const htmlConfig = {
  template: 'index.ejs',
  inject: 'body',
  cache: false,
  title: "Webpack example",
  filename: "index.html",
}

const plugins = [
  new HtmlWebpackPlugin(htmlConfig),
  new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
  })
]

const moduleConf = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [ "@babel/preset-env", "@babel/preset-react" ]
        }
      }
    }
  ]
}


const root = path.resolve("src")
const entry = {
  app: `${root}/hello-world.js`
}

const resolve = {
  extensions: [".js"],
  alias: {
    pages:`${root}/pages`,
    components: `${root}/components`,
  }
}

const config = {
  entry,
  output,
  resolve,
  plugins,
  module: moduleConf,
}

if(process.env.NODE_ENV === "development") {
  config.devServer = {
    open: true,
    port: process.env.PORT || 4000,
    contentBase: developmentOutputPath,
  }
}


module.exports = config