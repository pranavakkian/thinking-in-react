import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleFilterTextChange,
  handleIsStockOnlyChange,
} from '../Redux/SearchBarReducer/Actions/Actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        value={useSelector((state) => state.SearchBarReducer.filterText)}
        onChange={(event) => dispatch(handleFilterTextChange(event.target.value))}
        name="filterText"
        id="filterText"
        placeholder="Search product..."
      />
      <br />
      <input
        checked={useSelector((state) => state.SearchBarReducer.isStockOnly)}
        onChange={(event) => dispatch(handleIsStockOnlyChange(event.target.checked))}
        type="checkbox"
        name="isStockOnly"
        id="isStockOnly"
      />
      <span id="isStockOnlyLabel">Only show product in stock</span>
    </>
  );
};

export default memo(SearchBar);
