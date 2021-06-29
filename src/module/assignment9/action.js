import { SUCCESS, USERLOGIN } from '../../utils/actionNames';

export const UpdateUserList = (result) => {
	return {
		type: SUCCESS,
		payload: result
	};
};

export const UpdateUserLogin = (token) => {
	return {
		type: USERLOGIN,
		payload: token
	};
};
