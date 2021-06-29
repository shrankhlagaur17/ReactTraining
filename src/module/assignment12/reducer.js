import { APPROVED, UPDATE_ACTIVE_THEME } from '../../utils/actionNames';

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
		case UPDATE_ACTIVE_THEME:
			return {
				...state,
				active: action.payload
			};

		default:
			return state;
	}
};
