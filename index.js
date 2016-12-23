'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const koa = require('koa');
const app = koa();
const server = require('http').createServer(app.callback());
const router = require('./router.js');
const bodyParser = require('koa-bodyparser')();
const db = require('./config/db.js');

app.use(bodyParser);
app.use(router.routes());


db.on('error', console.error.bind(console, 'error connecting: '));
db.once('open', function () {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});
