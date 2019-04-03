import React from 'react';

const FilterTag = ({id, onClick, selected, symbol}) => (
  <div className="stock-chart-times" id={id} onClick={onClick} style={(selected === id) ? style : null}>
    {symbol}
  </div>
)

const style = {
  "marginBottom": "0",
  "paddingBottom": "13px",
  "color": "#1aa57b",
  "zIndex": "1",
  "borderBottom": "2px solid #1aa57b"
}

export default FilterTag;
