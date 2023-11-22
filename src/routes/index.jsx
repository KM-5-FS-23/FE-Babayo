// src/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';
import BooksPage from '../pages/BooksPage';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					exact
					component={Welcome}
				/>
				<Route
					path="/login"
					component={Login}
				/>
				<Route
					path="/register"
					component={Register}
				/>
				<Route
					path="/homepage"
					component={Homepage}
				/>
				<Route
					path="/books"
					component={BooksPage}
				/>
				{/* Tambahkan rute lainnya sesuai kebutuhan */}
			</Switch>
		</Router>
	);
};

export default Routes;
