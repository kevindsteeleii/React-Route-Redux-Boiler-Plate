import { combineReducers } from 'redux';
import root from './root';

// add additional reducers here by importing and adding them to the combineReducers function
const rootReducer = combineReducers({
  base: root
});

export default rootReducer;