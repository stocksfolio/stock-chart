import React from 'react';

const StockInfo = ({averageStock, changePercent}) => (
  <div id='stock-chart-company-info-container'>
    <div id='stock-chart-average-stock'>
      US${averageStock}
    </div>
    <div id='stock-chart-percent-change'>
      +US${changePercent} ({(changePercent/averageStock).toFixed(2)}%) 
      <span className="sc-percent"> Today</span>
    </div>
    <div id='stock-chart-percent-change'>
      +US$1.23 (0.52%) 
      <span className="sc-percent"> After Hours</span>
    </div>
  </div>
)

export default StockInfo;