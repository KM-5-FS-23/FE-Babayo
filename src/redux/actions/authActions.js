import axios from 'axios';
import { REGISTER_SUCCESS, LOGIN_SUCCESS } from '../constant/authConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/auth';

export const register = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/register`, userData);
		dispatch({ type: REGISTER_SUCCESS, payload: response.data });
		alert('Registrasi berhasil');
	} catch (error) {
		console.error('Register Error:', error);
	}
};

export const login = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/login`, userData);
        
		const token = response.data.token;
		localStorage.setItem('token', token);

		const userId = response.data.userId;
		localStorage.setItem('userId', userId);
		
		const username = response.data.username;
		localStorage.setItem('username', username);

    const role = response.data.role;
		localStorage.setItem('role', role);

		dispatch({ type: LOGIN_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Login Error:', error);
		throw error; 
	}
};
