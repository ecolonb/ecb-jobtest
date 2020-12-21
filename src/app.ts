/** @type {import("express").RequestHandler} */

const express = require('express');
const  cors = require('cors');
const  morgan = require('morgan');

const app = express();


app.use(morgan('dev'));
app.use(cors());

app.get("/", (req, res, next)=>{
    return res.send("Hello - typeScrpt");
})

module.exports = app;