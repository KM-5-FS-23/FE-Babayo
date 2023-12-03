// src/redux/reducers/detailBookReducer.js

import {
	GET_BOOK_SUCCESS,
	GET_BOOK_FAILURE,
} from '../constant/detailBookConstants';

const initialState = {
	book: [],
	loading: false,
	error: null,
};

const detailBookReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BOOK_SUCCESS:
			return {
				...state,
				book: action.payload,
				loading: false,
				error: null,
			};
		case GET_BOOK_FAILURE:
			return {
				...state,
				book: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default detailBookReducer;
