const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/stock-chart';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;