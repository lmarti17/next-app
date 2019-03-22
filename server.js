// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const address = require("address");
const qrcode = require("qrcode-terminal");

const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

// With express
const express = require("express");
app.prepare().then(() => {
  const server = express();

  server.use(handler).listen(3000);

  const url = `http://${address.ip()}:${3000}`;
  qrcode.generate(url, { small: true });
});
