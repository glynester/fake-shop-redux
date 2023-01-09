import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

// This becomes the top level structure of state
const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});

export default reducers;