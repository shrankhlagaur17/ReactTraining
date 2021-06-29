import { createContext, useReducer } from 'react';

export const initialState = {
	light: { backgroundColor: 'white', color: 'black' },
	dark: { backgroundColor: 'black', color: 'white' },
	theme: { backgroundColor: 'white', color: 'black' }
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children, initialState, themeReducer }) => {
	const [ themeState, dispatch ] = useReducer(themeReducer, initialState);

	return <ThemeContext.Provider value={{ themeState, dispatch }}>{children}</ThemeContext.Provider>;
};
