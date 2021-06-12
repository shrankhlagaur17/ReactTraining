import { Route } from 'react-router-dom';

function PrivateRoutes({ component: Component, ...rest }) {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default PrivateRoutes;
