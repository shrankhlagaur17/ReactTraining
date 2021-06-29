import { APPROVED, UPDATE_ACTIVE_THEME } from '../../utils/actionNames';

export const UpdateUserList = (result) => {
	return {
		type: APPROVED,
		payload: result
	};
};

export const UpdateThemeDark = () => {
	return {
		type: UPDATE_ACTIVE_THEME,
		payload: 'dark'
	};
};

export const UpdateThemeLight = () => {
	return {
		type: UPDATE_ACTIVE_THEME,
		payload: 'light'
	};
};
