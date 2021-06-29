import React from 'react';
// import ApiRouting from './router/ApiRouting';
import MovieCardRouting from './router/MovieCardRouting';
import { GlobalProvider, ThemeProvider } from './module/assignment12/globalState';
import { themeReducer } from './module/assignment12/reducer';
import { initialState1 } from './module/assignment12/theme';

const App = () => {
	return (
		<GlobalProvider>
			<ThemeProvider initialState1={initialState1} themeReducer={themeReducer}>
				<MovieCardRouting />
			</ThemeProvider>
		</GlobalProvider>
	);
};

export default App;
