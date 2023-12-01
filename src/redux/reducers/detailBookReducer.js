import { GET_BOOK_SUCCESS, GET_BOOK_FAILURE } from '../constant/detailBookConstants';

const initialState = {
  book: {},
  error: null,
};

const detailBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
        error: null,
      };
    case GET_BOOK_FAILURE:
      return {
        ...state,
        book: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailBookReducer;