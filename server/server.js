var express = require("express");

const path = require("path");

var router_db = require("./db_get");

var app = express();

var root = path.resolve(process.argv[2] || "../client/dist");

var root1 = path.resolve(process.argv[2] || "../client");

app.use(express.static(root));


app.use("/dbget", router_db.router_db_get);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(root1, "dist", "index.html"));
});

var server = app.listen(4243, "127.0.0.1");

console.log("server run at port 4243");
