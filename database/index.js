const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/stock-chart';

const db = mongoose.connect(mongoUri);

module.exports = db;