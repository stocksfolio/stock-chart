import React from 'react';
import { PropTypes } from 'prop-types';
import LineChart from './LineChart';

class LineChartContainer extends React.Component {
  constructor({ chart, selectedChart }) {
    super({ chart, selectedChart });
    
    this.coordinatedData = this.chartify(chart);
    this.state = {
      chartData: this.coordinatedData,
      selectedChartData: null,
      filter: selectedChart,
      hoverLoc: null,
      activePoint: null
    }
  }

  handleChartHover(hoverLoc, activePoint) {
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.selectedChart !== prevState.selectedChart){
      return { selectedChartData: prevState.chartData[nextProps.selectedChart]};
    }
    else return null;
  }

  componentDidMount() {
    this.setState((state, props) => ({
      selectedChartData: state.chartData[props.selectedChart]
    }))
  }

  getCords(e) {
    e.preventDefault();
  }
  
  chartify(chartObj) {
    var newObj = {};
    for (var key in chartObj) {
      newObj[key] = chartObj[key].map((chart, index) => {
        return {x: index, y: Number(chart)}
      })
    }
    return newObj;
  }

  render() {
    const { chartData, selectedChartData, filter } = this.state
    return (
      <div id='stock-chart-graph'>
        {selectedChartData && (<LineChart chartData={selectedChartData} onChartHover={ (a,b) => this.handleChartHover(a,b) } />)}
      </div>
    )
  }
}

LineChartContainer.propTypes = {
  chart: PropTypes.shape({
    day: PropTypes.arrayOf(PropTypes.string),
    week: PropTypes.arrayOf(PropTypes.string),
    month: PropTypes.arrayOf(PropTypes.string),
    threeMonth: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.arrayOf(PropTypes.string),
    fiveYear: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default LineChartContainer;
