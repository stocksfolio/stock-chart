/* eslint-disable max-len */
import React from 'react';

const CompanyInfo = ({companyName, noOfOwners, recommendation}) => (
  <div id='stock-chart-second-row'>
    <div id='stock-chart-company-name'>
      {companyName}
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
        <span className="stock-chart-company-tags-name sc-black">{recommendation}%</span>
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
        <span className="stock-chart-company-tags-name sc-black">{noOfOwners.toLocaleString('en-US')}</span>
      </div>
    </div>
  </div>
)

export default CompanyInfo;
