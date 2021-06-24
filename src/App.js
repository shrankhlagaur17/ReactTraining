import React from 'react';
import ApiRouting from './router/ApiRouting';
import Assignment10 from './module/assignment10';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Assignment10 />
		</Provider>
	);
};

export default App;
