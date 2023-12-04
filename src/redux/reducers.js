import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import detailBookReducer from './reducers/detailBookReducer';
import bookReducer from './reducers/bookReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	detailBook: detailBookReducer,
	book: bookReducer,
});

export default rootReducer;
