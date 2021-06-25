import { USERLIST, USERLOGIN } from '../../utils/actionNames';

export const UpdateUserList = (result) => {
	return {
		type: USERLIST,
		payload: result
	};
};

export const UpdateUserLogin = (token) => {
	return {
		type: USERLOGIN,
		payload: token
	};
};
