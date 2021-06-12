import { Route } from 'react-router-dom';

function PublicRoutes({ component: Component, ...rest }) {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default PublicRoutes;
