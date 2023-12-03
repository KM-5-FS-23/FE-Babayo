import axios from 'axios';
import {
  GET_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
} from '../constant/detailBookConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/books';

export const getBook = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');

		if (!token) {
			throw new Error('Token tidak ada!');
		}

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await axios.get(API_BASE_URL, config);

		dispatch({ type: GET_BOOK_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching books:', error);
		dispatch({ type: GET_BOOK_FAILURE, payload: error.message });
	}
};

export const getBookByID = (buku_id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');

		if (!token) {
			throw new Error('Token tidak ada!');
		}

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await axios.get(`${API_BASE_URL}/${buku_id}`, config);

		dispatch({ type: GET_BOOK_SUCCESS, payload: response.data });
	} catch (error) {
		if (error.response && error.response.status === 404) {
			dispatch({ type: GET_BOOK_FAILURE, payload: 'Buku tidak ditemukan.' });
		} else {
			console.error('Error fetching book details:', error);
			dispatch({ type: GET_BOOK_FAILURE, payload: error.message });
		}
	}
};

