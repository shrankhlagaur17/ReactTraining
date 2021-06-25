import React from 'react';
import ApiRouting from './router/ApiRouting';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<ApiRouting />
		</Provider>
	);
};

export default App;
