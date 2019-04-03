import React from 'react';
import FilterTag from './FilterTag';

class TimeFilter extends React.Component {
  constructor({ changeSelectedFilter }) {
    super({ changeSelectedFilter });

    this.state = {
      selected: 'day',
      changeSelectedFilter: changeSelectedFilter
    }
  }

  handleClick(e) {
    this.setState({
      selected: e.target.id
    })
  }

  render() {
    const time = [
      {time: 'day', symbol: '1D'},
      {time: 'week' , symbol: '1W'}, 
      {time: 'month' , symbol: '1M'}, 
      {time: 'threeMonth' , symbol: '3M'}, 
      {time: 'year' , symbol: '1Y'}, 
      {time: 'fiveYear' , symbol: '5Y'}
    ];
    const {selected, changeSelectedFilter} = this.state;
    return (
      <div id='stock-chart-time-filter'>
        <div id="stock-chart-times-container">
          {
            time.map(time => (
              <FilterTag 
              id={time.time} 
              key={time.time} 
              onClick={e => {changeSelectedFilter(e); this.handleClick(e);}} 
              selected={selected}
              symbol={time.symbol}/>
            ))
          }
        </div>
        <div id="stock-chart-lines-below" />
      </div>
    )
  }
}

export default TimeFilter;