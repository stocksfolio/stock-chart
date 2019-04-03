/* eslint-disable max-len */
import React, {Component} from "react";
import { PropTypes } from 'prop-types';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.svgHeight = 200;
    this.svgWidth = 700;

    this.state = {
      hoverLoc: null,
      activePoint: null
    }
  }

  // GET MAX & MIN X
  getMinX() {
    return this.props.chartData[0].x;
  }
  getMaxX() {
    return this.props.chartData[this.props.chartData.length - 1].x;
  }
  // GET MAX & MIN Y
  getMinY() {
    return this.props.chartData.reduce((min, p) => p.y < min ? p.y : min, this.props.chartData[0].y);
  }
  getMaxY() {
    return this.props.chartData.reduce((max, p) => p.y > max ? p.y : max, this.props.chartData[0].y);
  }

  getSvgX(x) {
    return (x / this.getMaxX() * this.svgWidth);
  }
  getSvgY(y) {
    return this.svgHeight - (y / this.getMaxY() * this.svgHeight);
  }

  makePath() {
    let pathD = "M " + this.getSvgX(this.props.chartData[0].x) + " " + this.getSvgY(this.props.chartData[0].y) + " ";
    pathD += this.props.chartData.map(point => {
      return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
    });
    return (
      <path className="linechart_path" d={pathD} style={{stroke: "#21d19c"}} />
    );
  }

  makeAxis() {
    const minX = this.getMinX(), maxX = this.getMaxX();
    const minY = this.getMinY(), maxY = this.getMaxY();

    return (
      <g className="linechart_axis">
        <line
          x1={this.getSvgX(minX)} 
          y1={this.getSvgY(minY)}
          x2={this.getSvgX(maxX)} 
          y2={this.getSvgY(minY)} 
          strokeWidth="1" 
          strokeDasharray="1, 5.259259259259259" 
          strokeDashoffset="0" 
        />
      </g>
    );
  }

  getCoords(e){
    const {chartData} = this.props;
    const svgLocation = document.getElementById("stock-chart-graph").getBoundingClientRect();
    const adjustment = (svgLocation.width - this.svgWidth) / 2; //takes padding into consideration
    const relativeLoc = e.clientX - svgLocation.left - adjustment;

    let svgData = [];
    chartData.map(point => {
      svgData.push({
        svgX: this.getSvgX(point.x),
        svgY: this.getSvgY(point.y)
      });
    });

    let closestPoint = {};
    for(let i = 0, c = 500; i < svgData.length; i++){
      if ( Math.abs(svgData[i].svgX - this.state.hoverLoc) <= c ){
        c = Math.abs(svgData[i].svgX - this.state.hoverLoc);
        closestPoint = svgData[i];
      }
    }

    if(relativeLoc < 0){
      this.stopHover();
    } else {
      this.setState({
        hoverLoc: relativeLoc,
        activePoint: closestPoint
      })
      this.props.onChartHover(relativeLoc, closestPoint);
    }
  }

  // STOP HOVER
  stopHover(){
    this.setState({hoverLoc: null, activePoint: null});
    this.props.onChartHover(null, null);
  }
  // MAKE ACTIVE POINT
  makeActivePoint(){
    const pointRadius = 5;
    return (
      <circle
        className='linechart_point'
        style={{stroke: "#FFF"}}
        r={pointRadius}
        cx={this.state.activePoint.svgX}
        cy={this.state.activePoint.svgY}
      />
    );
  }

  // MAKE HOVER LINE
  createLine(){
    
    return (
      <line className='hoverLine'
        x1={this.state.hoverLoc} y1={-8}
        x2={this.state.hoverLoc} y2={this.svgHeight - 20} />
    )
  }

  render() {
    return (
      <svg viewBox={`0 0 ${this.svgWidth} ${this.svgHeight}`} className={'linechart'} onMouseLeave={ () => this.stopHover() }
      onMouseMove={ (e) => this.getCoords(e) }>
        {this.makePath()}
        {this.makeAxis()}
        {this.state.hoverLoc ? this.createLine() : null}
        {this.state.hoverLoc ? this.makeActivePoint() : null}
      </svg>
    );
  }
}


// LineChart.propTypes = {
//   props.chartData: PropTypes.shape({
//      x: PropTypes.number.isRequired,
//      y: PropTypes.string.isRequired
//   }).isRequired
// };

export default LineChart;
