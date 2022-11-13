import path from 'path'
import webpack from 'webpack'

export default {
  // node环境
  target: 'node',
  // 入口文件
  entry: [path.resolve(__dirname, '../server/index.ts')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  externals: [],
  // loader们
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  // 开发环境也使用NoEmitOnErrorsPlugin
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
}
