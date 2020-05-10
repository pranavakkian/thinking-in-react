/* eslint-disable no-undef */
import {
  CLEANUP_SEARCHBAR_REDUCER,
  FILTER_TEXT,
  IS_STOCK_ONLY,
} from '../Types/Types';
import {
  handleCleanUpSearchBarReducer,
  handleFilterTextChange,
  handleIsStockOnlyChange,
} from './Actions';

describe('Search bar reducer actions:', () => {
  it('handleFilterTextChange', () => {
    expect(handleFilterTextChange('hello')).toEqual({
      type: FILTER_TEXT,
      value: 'hello',
    });
  });

  it('handleIsStockOnlyChange', () => {
    expect(handleIsStockOnlyChange(false)).toEqual({
      type: IS_STOCK_ONLY,
      value: false,
    });
  });

  it('handleCleanUpSearchBarReducer', () => {
    expect(handleCleanUpSearchBarReducer()).toEqual({
      type: CLEANUP_SEARCHBAR_REDUCER,
    });
  });
});
