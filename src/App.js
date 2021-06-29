import React from 'react';
// import ApiRouting from './router/ApiRouting';
import { Provider } from 'react-redux';
import MovieCardRouting from './router/MovieCardRouting';
import { GlobalProvider } from './module/assignment12/globalState';
import store from './store/store';
import Count from './module/assignment11/Count';
import { initialState, ThemeProvider } from './module/assignment12/ThemeContext';
import { themeReducer } from './module/assignment12/reducer';

// <Count />
const App = () => {
	return (
		<GlobalProvider>
			<ThemeProvider initialState={initialState} reducer={themeReducer}>
				<MovieCardRouting />
			</ThemeProvider>
		</GlobalProvider>
	);
};

export default App;
