import { USERLIST, USERLOGIN } from '../../utils/actionNames';

const initialState = {
	list: [],
	userToken: ''
};

const userListReducer = (state = initialState, action) => {
	switch (action.type) {
		case USERLIST:
			return {
				...state,
				list: action.payload
			};
		case USERLOGIN:
			return {
				...state,
				userToken: action.payload
			};
		default:
			return state;
	}
};



export default userListReducer;

