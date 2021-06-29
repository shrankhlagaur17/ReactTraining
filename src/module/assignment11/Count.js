import React, { useContext } from 'react';
import { IncrementNumber } from '../assignment10/action';
import { DecrementNumber } from '../assignment10/action';
import { GlobalContext } from './globalState';

const Count = () => {
	const { state, dispatch } = useContext(GlobalContext);
	return (
		<div>
			<span style={{ fontSize: '20px', display: 'block' }}>{state.counter}</span>
			<button style={{ display: 'block' }} onClick={() => dispatch(IncrementNumber(1))}>
				Increase
			</button>
			<button style={{ display: 'block' }} onClick={() => dispatch(DecrementNumber(1))}>
				Decrease
			</button>
		</div>
	);
};

export default Count;
