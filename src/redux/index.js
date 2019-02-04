import { createStore, combineReducers } from 'redux';
import appInfoReducer from './reducers/appInfo'

const store = createStore(
  combineReducers({
    appInfo: appInfoReducer
  })
);

export default store;
