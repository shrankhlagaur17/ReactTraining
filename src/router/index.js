import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoute';
import Assignment8 from '../module/assignment8';
import MovieCard from '../module/assignment8/MovieCard';
import CardDetail from '../module/assignment8/CardDetail';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoutes exact path="/" component={Assignment8} />
				<PrivateRoutes exact path="/movie" component={MovieCard} />
				<PrivateRoutes exact path="/carddetail/:id" component={CardDetail} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
