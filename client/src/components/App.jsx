/* eslint-disable max-len */
import React from 'react';
import Tag from './Tag';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: ['Manufacturing', 'Cars', 'Batteries']
    };
  }

  render() {
    return (
      <div id="stock-chart-container">
        <div id="stock-chart-company-tags-container">
          {
            // eslint-disable-next-line react/destructuring-assignment
            this.state.tags.map(tag => {
              return <Tag tag={tag} key={tag} />
            })
          }
        </div>
        <div id='stock-chart-second-row'>
          <div id='stock-chart-company-name'>
            Tesla
          </div>
          <div id="stock-chart-percent-and-owners-container">
            <div id='stock-chart-percent-recommendation'>
              <div className="sc-icon">
                <svg viewBox="0 0 20 20">
                  <g fillRule="evenodd" transform="translate(-4 -4)">
                    <path id="tag-a" d="M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4" />
                  </g>
                </svg>
              </div>
              <span className="stock-chart-company-tags-name sc-black">51%</span>
            </div>
            <div id='stock-chart-number-of-owners'>
              <div className="sc-icon">
                <svg width="12" height="14" viewBox="0 0 12 14">
                  <g fillRule="evenodd">
                    <ellipse cx="6" cy="3.5" rx="3.333" ry="3.5" />
                    <path d="M4.224,8.4 L7.776,8.4 L7.776,8.4 C10.1088508,8.4 12,10.2911492 12,12.624 L12,14 L0,14 L0,12.624 L8.8817842e-16,12.624 C6.02486595e-16,10.2911492 1.89114922,8.4 4.224,8.4 Z" />
                  </g>
                </svg>
              </div>
              <span className="stock-chart-company-tags-name sc-black">234,338</span>
            </div>
          </div>
        </div>
        <div id='stock-chart-company-info-container'>
          <div id='stock-chart-average-stock'>
            US$190.07
          </div>
          <div id='stock-chart-percent-change'>
            +US$1.43 (0.32%) 
            <span className="sc-percent">Today</span>
          </div>
          <div id='stock-chart-percent-change'>
            +US$1.23 (0.52%) 
            <span className="sc-percent">After Hours</span>
          </div>
        </div>
        <div id='stock-chart-graph'>
          SOON
        </div>
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
      </div>
    );
  }
}

export default App;
