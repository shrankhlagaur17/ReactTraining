import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoutes from './router/PublicRoute';
import Index from './module/assignment6/Index';
import EditScreen from './module/assignment6/EditScreen';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoutes exact path="/" component={Index} />
				<PublicRoutes exact path="/edit/:item" component={EditScreen} />;
			</Switch>
		</BrowserRouter>
	);
};

export default App;
