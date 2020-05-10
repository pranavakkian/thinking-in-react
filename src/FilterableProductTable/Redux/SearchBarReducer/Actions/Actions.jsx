import {
  CLEANUP_SEARCHBAR_REDUCER,
  FILTER_TEXT,
  IS_STOCK_ONLY,
} from '../Types/Types';

export const handleFilterTextChange = (value) => ({
  type: FILTER_TEXT,
  value,
});

export const handleIsStockOnlyChange = (value) => ({
  type: IS_STOCK_ONLY,
  value,
});

export const handleCleanUpSearchBarReducer = () => ({
  type: CLEANUP_SEARCHBAR_REDUCER,
});
