import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoute';
import Assignment5 from '../module/assignment5';
import SignupScreen from '../module/assignment5/SignupScreen';
import LoginScreen from '../module/assignment5/LoginScreen';
import MovieScreen from '../module/assignment5/MovieScreen';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoutes exact path="/" component={Assignment5} />
				<PublicRoutes exact path="/signup" component={SignupScreen} />
				<PublicRoutes exact path="/login" component={LoginScreen} />
				<PrivateRoutes exact path="/movie" component={MovieScreen} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
