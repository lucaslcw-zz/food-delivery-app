import { combineReducers } from 'redux';

import Authentication from '~/store/reducers/Authentication';
import Menu from '~/store/reducers/Menu';

const RootReducer = combineReducers({
  Authentication,
  Menu,
});

export default RootReducer;
