const express = require('express');

const app = express();

const port = process.env.PORT || 8300;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
