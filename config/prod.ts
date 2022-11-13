import webpack from 'webpack'

import WebpackConfig from './config'

const buildConfig = {
  ...WebpackConfig,
  mode: 'production',
} as any

webpack(buildConfig).run((err: any) => {
  console.log(err)
})
