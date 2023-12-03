import axios from 'axios';
import {
  GET_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
} from '../constant/detailBookConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/books';

export const getBook = (bookId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
    throw new Error('Token tidak ada!');
    }


    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API_BASE_URL}/${bookId}`, config);

    console.log('Config:', config);
    console.log(response);

    dispatch({ type: GET_BOOK_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching book details:', error);
    dispatch({ type: GET_BOOK_FAILURE, payload: error.message });
  }
};