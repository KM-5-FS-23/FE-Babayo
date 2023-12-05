import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import detailBookReducer from './reducers/detailBookReducer';
import bookReducer from './reducers/bookReducer';
import detailDailyReducer from './reducers/detailDailyReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	detailBook: detailBookReducer,
	book: bookReducer,
	detailDaily: detailDailyReducer,
});

export default rootReducer;
