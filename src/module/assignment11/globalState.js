import React, { createContext, useReducer } from 'react';
import counterReducer from '../assignment10/globalReducer';

const initialState = {
	counter: 0
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(counterReducer, initialState);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
