import { createStore } from 'redux';

import RootReducer from '~/store/reducers';

const store = createStore(RootReducer);

export default store;
