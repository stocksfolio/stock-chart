/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// var cors = require('cors');
const Stocks = require('../database/StockChart.js');

const app = express();
const port = 7000;

// app.use(cors());
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
    } else if (!data.length) {
      Stocks.find({id: req.params.stockId}, (err, data) => {
        if (err) {
          console.log(err.message);
        } else if (!data.length) {
          console.log('Data not found');
          res.sendStatus(404);
        } else {
          console.log(`Sending ${req.params.stockId} to client`);
          res.send(data);
        }
      }) 
    } else {
      console.log(`Sending ${req.params.stockId} to client`);
      res.send(data);
    }
  }) 
})

app.get('/stocks/:stockId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
})

app.get('/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/bundle.js'));
})