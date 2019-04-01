const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: ["babel-polyfill", `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {extensions: ['.js','.jsx']}
};
