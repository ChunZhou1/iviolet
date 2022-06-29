const express = require("express");

const bodyParser = require("body-parser");

const router_db_get = express.Router();

const path = require("path");
const fs = require("fs");

router_db_get.use(bodyParser.json()); // process json


const api = require("./api");
const { count } = require("console");

const fun_display = require("./fun_display");

router_db_get.post("/api/orderData", (req, res, next) => {
  let result = fun_display.processOrderStatus(req.body);
  res.json(result);
});

router_db_get.get("/api/orderData", (req, res, next) => {
  let result = fun_display.getOrderDataArray();
  res.json(result);
});

router_db_get.get("/api/clearData", (req, res, next) => {
  result = fun_display.clearOrderData();
  res.json(result);
});

module.exports = {
  router_db_get: router_db_get,
};
