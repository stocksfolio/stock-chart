import React from 'react';

const Tag = (props) => (
  <div className="stock-chart-company-tags">
    <span className="stock-chart-company-tags-name">{props.tag}</span>
  </div>
)

export default Tag;