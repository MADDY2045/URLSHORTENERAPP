const express = require("express");
const ConnectMongoDB = require("./config/db");
const app = express();
var cors = require("cors");
const path = require("path");
require("dotenv").config();

//cors
app.use(express.json());
app.use(cors());

//connect MongoDB instance
ConnectMongoDB();

//Routes init
const UrlShortenerRoutes = require("./routes/api/UrlShortener");

//Use Route Middleware
app.use("/api/urls", UrlShortenerRoutes);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
