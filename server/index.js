// npm i express cookie-parser 
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello world ! from Developer Harsh" });
})

app.listen(PORT);