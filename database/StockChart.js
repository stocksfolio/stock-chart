const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
  id: String,
  stockId: {type: String, unique: true},
  stockInfo: {
    stockCompany: String,
    relatedTags: Array,
    noOfOwners: Number,
    recommendationPercent: Number,
  },
  stockData: {
    day: Array,
    week: Array,
    month: Array,
    threeMonth: Array,
    year: Array,
    fiveYear: Array
  },
  averageStock: Number,
  changePercent: Number
}, 
  {
    timestamps: true
  }
);

const Stocks = mongoose.model('Stocks', stockSchema);

module.exports = Stocks;
