import React from 'react';
import { IncrementNumber, DecrementNumber } from './action';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
	const dispatch = useDispatch();
	const { counter } = useSelector((state) => state.counterReducer);
	return (
		<div>
			<div>Counter: {counter}</div>
			<button
				onClick={() => {
					dispatch(IncrementNumber(1));
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					dispatch(DecrementNumber(1));
				}}
			>
				Decrement
			</button>
		</div>
	);
};

export default Counter;
