import '@babel/polyfill';

const { toMatchOneOf, toMatchShapeOf } = require('jest-to-match-shape-of');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

let connection;
let db;

let dataShape = {
  id: 'String',
  stockId: 'String',
  stockInfo: {
    stockCompany: 'String',
    relatedTags: ['Array'],
    noOfOwners: 1,
    recommendationPercent: 1,
  },
  stockData: {
    day: [1],
    week: [1],
    month: [1],
    threeMonth: [1],
    year: [1],
    fiveYear: [1]
  },
  averageStock: 2,
  changePercent: 2
}

expect.extend({
  toMatchOneOf,
  toMatchShapeOf,
})

beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__);
  db = await connection.db(global.__MONGO_DB_NAME__);
});

afterAll(async () => {
  await connection.close();
});

describe('Mongo Database Data Test', () => {
  it('Should have a seeding script', async () => {
    // eslint-disable-next-line max-len
    fs.readFile(path.join(__dirname, '/../package.json'), 'utf8', (err, data) => {
      if (err) throw err;
      expect(data.indexOf('node database/seed.js')).not.toBe(-1);
    });
  });

  it('Should contain 100 pieces of information', async done => {
    const stocks = db.collection('stocks');
    await stocks.find({}).toArray((err, result) => {
      if (err) throw err;
      expect(result.length).toBe(100);
      done();
    });
  })

  it('Should return the correct data shape when queried', async done =>  {
    const stocks = db.collection('stocks');
    await stocks.findOne({}, (err, result) => {
      if (err) throw err;
      expect(result).toMatchShapeOf(dataShape);
      dataShape.changePercent = 'String';
      expect(result).not.toMatchShapeOf(dataShape);
      done();
    });
  });

  it('Should return 108 stock data points for each time filter', async done => {
    const stocks = db.collection('stocks');
    await stocks.findOne({}, (err, results) => {
      if (err) throw err;
      for (let key in results.stockData) {
        expect(results.stockData[key].length).toBe(108);
      }
      done();
    });
  })
});
