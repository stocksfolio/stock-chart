import React from 'react';
import { PropTypes } from 'prop-types';
import LineChart from './LineChart';
import ToolTip from './ToolTip';

class LineChartContainer extends React.Component {
  constructor(props) {
    super(props);
    
    const { chart, selectedChart } = this.props;
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
    const { changePrice } = this.props;
    changePrice(activePoint);
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
    const { activePoint, selectedChartData, hoverLoc, filter } = this.state
    return (
      <React.Fragment>
        <div className='stock-chart-popup'>
          {hoverLoc && (<ToolTip hoverLoc={hoverLoc} activePoint={activePoint} filter={filter}/>)}
        </div>
        <div id='stock-chart-graph'>
          {selectedChartData && (
          <LineChart 
          chartData={selectedChartData} 
          onChartHover={ (a,b) => this.handleChartHover(a,b) } />
          )}
        </div>
      </React.Fragment>
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
