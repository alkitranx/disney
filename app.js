const express = require('express');
const app = express();
const sequelize = require('./database/db');



 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {console.log('server arriba')})