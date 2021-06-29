import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoute';
import Assignment12 from '../module/assignment12';
import ListingScreen from '../module/assignment12/ListingScreen';

function ApiRouting() {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoutes exact path="/" component={Assignment12} />
				<PrivateRoutes exact path="/movie" component={ListingScreen} />
			</Switch>
		</BrowserRouter>
	);
}

export default ApiRouting;
