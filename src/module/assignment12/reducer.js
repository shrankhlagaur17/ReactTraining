import { APPROVED, UPDATE_DARK, UPDATE_LIGHT } from '../../utils/actionNames';
import { initialState } from './ThemeContext';

export const userMovieReducer = (state = [], action) => {
	switch (action.type) {
		case APPROVED:
			return {
				...state,
				list: action.payload
			};
		default:
			return state;
	}
};

export const themeReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_DARK:
			return {
				...state,
				dark: { ...initialState.dark, border: '1px solid red' }
			};
		case UPDATE_LIGHT:
			return {
				...state,
				light: { ...initialState.light, border: '1px solid green' }
			};
		default:
			return state;
	}
};
