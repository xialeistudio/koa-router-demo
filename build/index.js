"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const app = new Koa();
app.use(bodyParser());
const router = new Router();
router.get('/', async (ctx) => {
    ctx.body = `GET 您现在访问的是 ${ctx.path}`;
});
router.post('/', async (ctx) => {
    ctx.body = `POST 您提交的内容: ${JSON.stringify(ctx.request.body)}`;
});
router.delete('/:id', async (ctx) => {
    ctx.body = `您当前删除的ID是${ctx.params.id}`;
});
router.get('/now', async (ctx) => {
    ctx.body = new Date();
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(8080, () => console.log('listen 8080'));
