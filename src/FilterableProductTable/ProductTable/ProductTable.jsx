import PropTypes from 'prop-types';
import React, { Fragment, memo } from 'react';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';

const ProductTable = (props) => {
  const { data } = props;
  const headingSet = new Set();
  data.map((item) => headingSet.add(item.category));
  const headings = [];
  headingSet.forEach((item) => headings.push(item));

  return (
    <table>
      <thead>
        <tr>
          <th id="nameHeader">Name</th>
          <th id="priceHeader">Price</th>
        </tr>
      </thead>
      <tbody>
        {headings.map((heading) => (
          <Fragment key={heading}>
            <tr>
              <ProductCategoryRow category={heading} />
            </tr>
            {data
              .filter((item) => item.category === heading)
              .map((value) => (
                <tr key={value.name}>
                  <ProductRow data={value} />
                </tr>
              ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

ProductTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(ProductTable);
