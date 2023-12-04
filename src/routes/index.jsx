import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';
import BooksPage from '../pages/BooksPage';
import DetailBooksPage from '../pages/DetailBooksPage';
import ReadBookPage from '../pages/ReadBookPage';
import DailysPage from '../pages/DailysPage';
import ReadDailyPage from '../pages/ReadDailyPage';
import DiscussPage from '../pages/DiscussPage';
import CreateDailyPage from '../pages/CreateDailyPage';
import FavoritBooks from '../pages/FavoritBooks';
import FavoritDailys from '../pages/FavoritDailys';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

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
				<PrivateRoute
					path="/homepage"
					component={Homepage}
				/>
				<PrivateRoute
					path="/books"
					component={BooksPage}
				/>
				<PrivateRoute
					path="/detail-books/:buku_id"
					component={DetailBooksPage}
				/>
				<PrivateRoute
					path="/read-book/:buku_id"
					component={ReadBookPage}
				/>
				<PrivateRoute
					path="/dailys"
					component={DailysPage}
				/>
				<PrivateRoute
					path="/read-daily"
					component={ReadDailyPage}
				/>
				<PrivateRoute
					path="/create-daily"
					component={CreateDailyPage}
				/>
				<PrivateRoute
					path="/discuss"
					component={DiscussPage}
				/>
				<PrivateRoute
					path="/favorite-books"
					component={FavoritBooks}
				/>
				<PrivateRoute
					path="/favorite-dailys"
					component={FavoritDailys}
				/>
				{/* Tambahkan rute lainnya sesuai kebutuhan */}
			</Switch>
		</Router>
	);
};

export default Routes;
