// src/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';
import BooksPage from '../pages/BooksPage';
import DetailBooksPage from '../pages/DetailBooksPage';
import ReadBookPage from '../pages/ReadBookPage';
import DailysPage from '../pages/DailysPage';
import ReadDailyPage from '../pages/ReadDailyPage';

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
				<Route
					path="/detail-books"
					component={DetailBooksPage}
				/>
				<Route
					path="/read-book"
					component={ReadBookPage}
				/>
				<Route
					path="/dailys"
					component={DailysPage}
				/>
				<Route
					path="/read-daily"
					component={ReadDailyPage}
				/>
				{/* Tambahkan rute lainnya sesuai kebutuhan */}
			</Switch>
		</Router>
	);
};

export default Routes;
