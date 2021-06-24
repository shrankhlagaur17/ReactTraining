import { INCREMENT, DECREMENT } from '../../utils/actionNames';

export const IncrementNumber = (number) => {
	return {
		type: INCREMENT,
		payload: number
	};
};

export const DecrementNumber = (number) => {
	return {
		type: DECREMENT,
		payload: number
	};
};
