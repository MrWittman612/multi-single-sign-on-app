const express = require('express');
const path = require('path');
const connectDB = require('./config/connectDB');

const app = express();

connectDB();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8300;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Started on port ${port}`);
});
