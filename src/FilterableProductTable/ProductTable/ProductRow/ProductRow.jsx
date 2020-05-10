import PropTypes from 'prop-types';
import React, { memo } from 'react';

const ProductRow = (props) => {
  const { data } = props;
  const { name, price } = data;

  return (
    <>
      <td id="dataName">{name}</td>
      <td id="dataPrice">{price}</td>
    </>
  );
};

ProductRow.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(ProductRow);
