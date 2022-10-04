require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');


const api = require('./api');

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(e => {
    console.error(e);
});
const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
app.use (bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(4000, () => {
    console.log('Listening to port %d', port);
})