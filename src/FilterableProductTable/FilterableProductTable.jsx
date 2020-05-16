import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductTable from './ProductTable/ProductTable';
import { handleCleanUpSearchBarReducer } from './Redux/SearchBarReducer/Actions/Actions';
import SearchBar from './SearchBar/SearchBar';

const FilterableProductTable = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.SearchBarReducer.filterText);
  const isStockOnly = useSelector(
    (state) => state.SearchBarReducer.isStockOnly,
  );

  useEffect(() => {
    axios.get('').then((response) => {
      setData(response.data);
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
        data.filter(
          (item) => item.name.toLocaleLowerCase().includes(filterText)
            /* istanbul ignore next */
            && item.stocked,
        ),
      );
    } else if (filterText !== '' && !isStockOnly) {
      setFilteredData(
        data.filter((item) => item.name.toLowerCase().includes(filterText)),
      );
    } else if (filterText === '' && isStockOnly) {
      setFilteredData(data.filter((item) => item.stocked));
    } else {
      setFilteredData(data);
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
