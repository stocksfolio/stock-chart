const db  = require('./index.js');
const StockChart = require('./StockChart.js');
const generateData = require('./generateData.js');

const stockData = [];
for (let i = 0; i < 100; i++) {
  stockData.push(generateData.generateData(i));
}

const insertStockData = function() {
  StockChart.init()
  .then(() => {
    StockChart.create(stockData)
      .then(() => db.close())
      .catch((e) => {
        console.log('\n \n \n THERE WAS AN ERROR IN THE DATABASE: \n \n \n', e.message);
      })
      .then(() => db.close());
  })
};

insertStockData();
