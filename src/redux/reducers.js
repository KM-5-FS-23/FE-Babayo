import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import detailBookReducer from './reducers/detailBookReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  detailBook: detailBookReducer, 
});

export default rootReducer;