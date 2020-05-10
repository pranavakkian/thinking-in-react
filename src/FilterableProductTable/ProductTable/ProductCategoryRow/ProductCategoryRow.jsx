import PropTypes from 'prop-types';
import React, { memo } from 'react';

const ProductCategoryRow = (props) => {
  const { category } = props;
  return (
    <th id="categoryHeader" colSpan="2">
      {category}
    </th>
  );
};

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default memo(ProductCategoryRow);
