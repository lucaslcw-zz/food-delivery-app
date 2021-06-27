import { combineReducers } from 'redux';

import Authentication from '~/store/reducers/Authentication';
import Product from '~/store/reducers/Product';
import Cart from '~/store/reducers/Cart';

const RootReducer = combineReducers({
  Authentication,
  Product,
  Cart,
});

export default RootReducer;
