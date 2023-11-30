import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AuthGuard = ({ children }) => {
	const history = useHistory();
	const isAuthenticated = useSelector((state) => state.auth.user !== null);

	useEffect(() => {
		// Lakukan pengecekan otentikasi saat komponen dimount
		if (!isAuthenticated) {
			// Jika tidak otentikasi, arahkan ke halaman login
			history.push('/login');
		}
	}, [isAuthenticated, history]);

	return <>{isAuthenticated ? children : null}</>;
};

export default AuthGuard;
