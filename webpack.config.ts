import path from 'path'
import Webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config: Webpack.Configuration = {
  mode: 'production',
  target: 'node',
  entry: './server/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/server'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}

export default config
