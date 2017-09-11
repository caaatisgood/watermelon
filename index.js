const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const Logger = require('koa-logger')
const app = new Koa()
const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = '[GET] - fuck you!'
  })
  .get('/:name', (ctx, next) => {
    ctx.body = `[GET] - fuck you ${ctx.params.name}!`
  })
  .post('/', (ctx, next) => {
    ctx.body = `[POST] - fuck you ${ctx.request.body.name}!`
  })

app
  .use(Logger())
  .use(BodyParser())
  .use(router.routes())
  .use(ctx => {
    ctx.body = 'Fuck you'
  })
 
app.listen(9487)
