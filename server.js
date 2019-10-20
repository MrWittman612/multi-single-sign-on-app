const express = require('express');
const connectDB = require('./config/connectDB');

const app = express();

connectDB();

const port = process.env.PORT || 8300;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
