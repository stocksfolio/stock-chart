/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Stocks = require('../database/StockChart.js');

const app = express();
const port = 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public/dist')));

app.listen(port, () => {
  console.log(`Server is now listening on port: ${port}`)
})

app.get('/api/:stockId', (req, res) => {
  console.log('Got a request searching for', req.params.stockId);
  Stocks.find({stockId: req.params.stockId}, (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(data);
    }
  }) 
})