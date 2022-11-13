import Webpack from 'webpack'
import StartServerPlugin from 'start-server-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

import WebpackConfig from './config'

const devConfig = {
  ...WebpackConfig,
  mode: 'development',
} as any
devConfig.entry.push('webpack/hot/signal')
devConfig.externals.push(
  nodeExternals({
    allowlist: ['webpack/hot/signal'],
  })
)
const devPlugins = [
  new Webpack.HotModuleReplacementPlugin(),
  new StartServerPlugin({
    name: 'server.js',
    signal: true,
    nodeArgs: ['--inspect'],
  }),
]
devConfig.plugins.push(...devPlugins)
// 通过watch来实时编译
Webpack(devConfig).watch(
  {
    aggregateTimeout: 300,
  },
  (err: any) => {
    console.log(err, 'err')
  }
)
