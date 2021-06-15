import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data/data.json';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '40px'
	},
	button: {
		margin: '10px 0',
		width: '100px',
		height: '30px',
		backgroundColor: 'gray',
		color: 'white',
		fontSize: '15px',
		borderRadius: '15px'
	},
	emailInput: {
		// width: '95%',
		// height: '50px',
		font: `${theme.typography.fontWeightMedium} ${theme.spacing(2)}px "Helvetica"`,
		lineHeight: 1.78,
		borderRadius: '10px',
		color: 'var(--gray)!important',
		backgroundColor: 'var(--bg)',
		border: '1px solid',
		border: 'white',
		margin: '8px 10px',
		cursor: 'text!important',
		padding: '12px 20px'
	}
}));

const ObjectModal = ({ obj, myObjKey, isArray }) => {
	const classes = useStyles();
	const [ keyValues, setKeyValues ] = useState(Object.values(obj));

	useEffect(() => {
		console.log(obj, myObjKey);
	}, []);

	const handleClick = () => {
		let objUpdate = obj;
		let j = 0;
		for (let i in objUpdate) {
			console.log('keyValues[i]', i, keyValues[i]);
			objUpdate[i] = keyValues[j++];
		}
		console.log('keyValues', keyValues, myObjKey, 'objUpdate==>>>>', objUpdate);
		data[myObjKey] = objUpdate;
		localStorage.setItem('myObject', JSON.stringify(data));
	};

	const handleChange = (e) => {
		let temp = [ ...keyValues ];
		temp[e.target.id] = e.target.value;
		console.log('before', keyValues);
		setKeyValues(temp);
		console.log('after', keyValues);
	};

	return (
		<div className={classes.root}>
			<form>
				{obj.map((e, i) => {
					Object.keys(e).map((ast, j) => (
						// return (
						// 	<div>
						// 		{ast}:
						// 		<input
						// 			id={j}
						// 			value={keyValues[j]}
						// 			onChange={handleChange}
						// 			className={classes.emailInput}
						// 		/>
						// 	</div>
						// );

						<div>
							{ast}:
							<input id={j} value={keyValues[j]} onChange={handleChange} className={classes.emailInput} />
						</div>
					));
				})}
				<button type="button" onClick={handleClick} className={classes.button}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ObjectModal;
