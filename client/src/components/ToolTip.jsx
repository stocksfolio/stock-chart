import React from 'react';

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    
  }

  time(position) {
    const { filter } = this.props;
    if (filter === "day") {
      let minutes = position * 5;
      let h = Math.floor(minutes / 60) + 9;
      let m = minutes % 60;
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      return `${h}:${m} ET`
    } else if (this.filter === "week") {
      // Outside scope of work
    } else if (this.filter === "month") {
      // Outside scope of work
    } else if (this.filter === "threeMonth") {
      // Outside scope of work
    } else if (this.filter === "year") {
      // Outside scope of work
    } else if (this.filter === "fiveYear") {
      // Outside scope of work
    }
  }

  render() {
    const {hoverLoc, activePoint} = this.props;
    const svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();

    let placementStyles = {};
    let width = 100;
    placementStyles.width = width + 'px';
    placementStyles.left = (hoverLoc + svgLocation.left - (width/2) - 10) + 'px';
    return (
      <div id='stock-chart-hover' style={ placementStyles }>
        <div className='stock-chart-time'> { this.time(activePoint.position) } </div>
      </div>
    )
  }
} 

export default ToolTip;
