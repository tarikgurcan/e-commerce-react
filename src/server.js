const express = require("express")
const compression = require("compression")

const app = express()
const port = process.env.PORT || 5000;

app.use(compression());