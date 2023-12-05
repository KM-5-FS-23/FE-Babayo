import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import detailBookReducer from './reducers/detailBookReducer';
import bookReducer from './reducers/bookReducer';
import detailDailyReducer from './reducers/detailDailyReducer';
import dailyReducer from './reducers/dailyReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	detailBook: detailBookReducer,
	book: bookReducer,
	detailDaily: detailDailyReducer,
	daily: dailyReducer,
});

export default rootReducer;
