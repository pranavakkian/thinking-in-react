import { combineReducers } from 'redux';
import SearchBarReducer from './FilterableProductTable/Redux/SearchBarReducer/SearchBarReducer';

const RootReducer = combineReducers({ SearchBarReducer });

export default RootReducer;
