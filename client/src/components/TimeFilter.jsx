import React from 'react';

const TimeFilter = () => (
  <div id='stock-chart-time-filter'>
    <div id="stock-chart-times-container">
      <div className="stock-chart-times">
        1D
      </div>
      <div className="stock-chart-times">
        1W
      </div>
      <div className="stock-chart-times">
        1M
      </div>
      <div className="stock-chart-times">
        3M
      </div>
      <div className="stock-chart-times">
        1Y
      </div>
      <div className="stock-chart-times">
        5Y
      </div>
    </div>
    <div id="stock-chart-lines-below" />
  </div>
)

export default TimeFilter;