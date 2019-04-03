import React from 'react';
import LineChartContainer from './LineChartContainer';
import ToolTip from './ToolTip';
import TimeFilter from './TimeFilter';
import StockInfo from './StockInfo';
import CompanyInfo from './CompanyInfo';
import TagContainer from './TagContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

<Route path='/:stockId' component={App} />

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: null,
      stockInfo: null,
      averageStock: null,
      changePercent: null,
      selectedFilter: 'day'
    };
  }
  

  componentDidMount() {
    const { stockId } = this.props.match ? this.props.match.params : { stockId: null };
    axios.get((stockId && `/api/${stockId}`) || `/api/TSLA`)
    .then((response) => {
      this.setState({
        stockInfo: response.data[0].stockInfo,
        chartData: response.data[0].stockData,
        averageStock: response.data[0].averageStock,
        changePercent: response.data[0].changePercent
      })
    })
  }

  changeSelectedFilter(e) {
    this.setState({
      selectedFilter: e.target.id
    })
  }

  render() {
    const { chartData, stockInfo, averageStock, changePercent, selectedFilter } = this.state;
    return (
      <div id="stock-chart-container">
        {stockInfo && (<TagContainer tags={stockInfo.relatedTags} />)}

        {stockInfo && (
        <CompanyInfo 
          companyName={stockInfo.stockCompany} 
          noOfOwners={stockInfo.noOfOwners}
          recommendation={stockInfo.recommendationPercent} />
        )}

        {stockInfo && (
        <StockInfo 
        averageStock={averageStock}
        changePercent={changePercent} />)}

        <ToolTip />
        {chartData && (<LineChartContainer chart={chartData} selectedChart={selectedFilter} />)}
        <TimeFilter changeSelectedFilter={e => this.changeSelectedFilter(e)} />
      </div>
    );
  }
}

export default App;
