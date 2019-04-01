import React from 'react';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import TimeFilter from './TimeFilter';
import StockInfo from './StockInfo';
import CompanyInfo from './CompanyInfo';
import TagContainer from './TagContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: ['Manufacturing', 'Cars', 'Batteries']
    };
  }

  render() {
    const { tags } = this.state;
    return (
      <div id="stock-chart-container">
        <TagContainer tags={tags} />
        <CompanyInfo />
        <StockInfo />
        <ToolTip />
        <LineChart />
        <TimeFilter />
      </div>
    );
  }
}

export default App;
