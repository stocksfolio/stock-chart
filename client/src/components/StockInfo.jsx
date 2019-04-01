import React from 'react';

const StockInfo = () => (
  <div id='stock-chart-company-info-container'>
    <div id='stock-chart-average-stock'>
      US$190.07
    </div>
    <div id='stock-chart-percent-change'>
      +US$1.43 (0.32%) 
      <span className="sc-percent">Today</span>
    </div>
    <div id='stock-chart-percent-change'>
      +US$1.23 (0.52%) 
      <span className="sc-percent">After Hours</span>
    </div>
  </div>
)

export default StockInfo;