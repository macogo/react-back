import {createStore,applyMiddleware} from 'redux';
// import * as home from './home/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  applyMiddleware(thunk)
);

export default store;