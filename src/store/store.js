import { createStore, applyMiddleware } from 'redux';
// import * as home from './home/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  // combineReducers({...login}),
  applyMiddleware(thunk)
);

export default store;