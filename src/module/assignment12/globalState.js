import React, { createContext, useReducer } from 'react';
import { userMovieReducer } from './reducer';
import { initialState1 } from './theme';

const initialState = {
	list: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(userMovieReducer, initialState);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export const ThemeContext = createContext(initialState1);

export const ThemeProvider = ({ children, initialState1, themeReducer }) => {
	const [ themeState, dispatch ] = useReducer(themeReducer, initialState1);

	return <ThemeContext.Provider value={{ themeState, dispatch }}>{children}</ThemeContext.Provider>;
};
