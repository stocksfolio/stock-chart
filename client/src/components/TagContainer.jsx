import React from 'react';
import { PropTypes } from 'prop-types';
import Tag from './Tag';

const TagContainer = ( {tags} ) => (
  <div id="stock-chart-company-tags-container">
    {
      // eslint-disable-next-line react/destructuring-assignment
      tags.map(tag => {
        return <Tag tag={tag} key={tag} />
      })
    }
  </div>
)

TagContainer.propTypes = {
  tags: PropTypes.arrayOf.isRequired
};

export default TagContainer;