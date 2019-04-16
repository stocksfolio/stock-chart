const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/stock-chart';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;