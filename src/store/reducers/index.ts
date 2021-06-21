import { combineReducers } from 'redux';

import Authentication from '~/store/reducers/Authentication';

const RootReducer = combineReducers({
  Authentication,
});

export default RootReducer;
