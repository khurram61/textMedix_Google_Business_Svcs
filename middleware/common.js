// Init
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// import helmet from "helmet";
const responseTime = require("response-time");
// Common Middleware
module.exports = (app) => {
  app.use(cors());
  // secure your Express apps by setting various HTTP headers.
  // app.use(helmet());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(responseTime());
  app.use("/uploads", express.static("uploads", { maxAge: "31536000" }));
  app.use(express.static("public"));
};
