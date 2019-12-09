const express = require('express');
const engines = require('consolidate');

const app = express();

app.listen(3000, function() {
  console.log('hello');
});
