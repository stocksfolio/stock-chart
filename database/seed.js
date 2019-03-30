const db  = require('./index.js');
const StockChart = require('./StockChart.js');
const generateData = require('./generateData.js');

const stockData = [];
for (let i = 0; i < 100; i++) {
  stockData.push(generateData.generateData(i));
}

const insertStockData = function() {
  StockChart.create(stockData)
    .then(() => db.disconnect());
};

insertStockData();
