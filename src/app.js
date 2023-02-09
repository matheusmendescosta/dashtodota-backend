const express = require("express");
const app = express();
const router = require("./router/router");

app.use(express.json());
app.use(router);

app.listen(3001, function (req, res) {
  console.log("is runner bicth 🚦");
});
