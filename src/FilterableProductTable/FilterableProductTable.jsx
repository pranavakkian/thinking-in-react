import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MockData from './MockData/MockData';
import ProductTable from './ProductTable/ProductTable';
import { handleCleanUpSearchBarReducer } from './Redux/SearchBarReducer/Actions/Actions';
import SearchBar from './SearchBar/SearchBar';

const FilterableProductTable = () => {
  const [filteredData, setFilteredData] = useState();
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.SearchBarReducer.filterText);
  const isStockOnly = useSelector(
    (state) => state.SearchBarReducer.isStockOnly,
  );

  useEffect(() => {
    axios.get('').then((response) => {
      setFilteredData(response.data);
    });
    return () => {
      dispatch(handleCleanUpSearchBarReducer());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filterText !== '' && isStockOnly) {
      setFilteredData(
        MockData.filter(
          (item) => item.name.toLocaleLowerCase().includes(filterText)
            /* istanbul ignore next */
            && item.stocked,
        ),
      );
    } else if (filterText !== '' && !isStockOnly) {
      setFilteredData(
        MockData.filter((item) => item.name.toLowerCase().includes(filterText)),
      );
    } else if (filterText === '' && isStockOnly) {
      setFilteredData(MockData.filter((item) => item.stocked));
    } else {
      setFilteredData(MockData);
    }
    // eslint-disable-next-line
  }, [filterText, isStockOnly]);

  return (
    <>
      <SearchBar />
      {filteredData && <ProductTable data={filteredData} />}
    </>
  );
};

export default memo(FilterableProductTable);
