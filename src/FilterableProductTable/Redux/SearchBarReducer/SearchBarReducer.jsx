import InitialState from './InitialState/InitialState';
import {
  CLEANUP_SEARCHBAR_REDUCER,
  FILTER_TEXT,
  IS_STOCK_ONLY,
} from './Types/Types';

const SearchBarReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FILTER_TEXT:
      return {
        ...state,
        filterText: action.value,
      };

    case IS_STOCK_ONLY:
      return {
        ...state,
        isStockOnly: action.value,
      };

    case CLEANUP_SEARCHBAR_REDUCER:
      return InitialState;

    default:
      return state;
  }
};

export default SearchBarReducer;
