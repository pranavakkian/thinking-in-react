/* eslint-disable no-undef */
import SearchBarReducer from './SearchBarReducer';
import {
  CLEANUP_SEARCHBAR_REDUCER,
  FILTER_TEXT,
  IS_STOCK_ONLY,
} from './Types/Types';

describe('Search bar reducer', () => {
  it('Type filter text', () => {
    expect(
      SearchBarReducer(undefined, { type: FILTER_TEXT, value: 'hello' }),
    ).toEqual({ filterText: 'hello', isStockOnly: false });
  });

  it('Type is stock only', () => {
    expect(
      SearchBarReducer(undefined, { type: IS_STOCK_ONLY, value: true }),
    ).toEqual({ filterText: '', isStockOnly: true });
  });

  it('Type clean up', () => {
    expect(
      SearchBarReducer(undefined, {
        type: CLEANUP_SEARCHBAR_REDUCER,
      }),
    ).toEqual({ filterText: '', isStockOnly: false });
  });

  it('Type not defined', () => {
    expect(SearchBarReducer(undefined, { type: '' })).toEqual({
      filterText: '',
      isStockOnly: false,
    });
  });
});
