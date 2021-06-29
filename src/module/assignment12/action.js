import { APPROVED, UPDATE_LIGHT, UPDATE_DARK } from '../../utils/actionNames';

export const UpdateUserList = (result) => {
	return {
		type: APPROVED,
		payload: result
	};
};

export const UpdateThemeDark = () => {
	return {
		type: UPDATE_DARK,
		payload: '1px solid red'
	};
};

export const UpdateThemeLight = () => {
	return {
		type: UPDATE_LIGHT,
		payload: '1px solid green'
	};
};
