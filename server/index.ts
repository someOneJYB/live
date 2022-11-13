import Koa from 'koa'
import Router from 'koa-router'

import { default as logger } from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

interface HelloRequest {
  name: string
}

// Hello world
router.post('/', async (ctx, next) => {
  const { name } = <HelloRequest>ctx.request.body
  ctx.body = { name }
  await next()
})

// Hello world
router.get('/', async (ctx, next) => {
  ctx.body = 'hello world'
  await next()
})

// Middlewares
app.use(json())
app.use(logger())
app.use(bodyParser())

// Routes
app.use(router.routes()).use(router.allowedMethods())

const server = app.listen(3000, () => {
  console.log('点点滴滴Koa started： http://localhost:3000')
})
let currentApp = app.callback()

// 热加载
if (module?.hot) {
  // 监听./app.ts
  server.removeListener('request', currentApp)
  currentApp = app.callback()
  server.on('request', currentApp)
}
