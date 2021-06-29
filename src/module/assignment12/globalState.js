import React, { createContext, useReducer } from 'react';
import { userMovieReducer } from './reducer';

const initialState = {
	list: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(userMovieReducer, initialState);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
