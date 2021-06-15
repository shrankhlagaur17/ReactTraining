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
	console.log('Keyvalues', keyValues);

	const handleClick = () => {
		localStorage.setItem('myObject', JSON.stringify(keyValues));
	};

	const handleChange = (e, index, j) => {
		console.log('event', e.target.value);
		let temp = [ ...keyValues ];
		console.log('j', j);
		console.log('temp', temp[index][j]);

		temp[index][j] = e.target.value;
		setKeyValues(temp);
	};

	return (
		<div className={classes.root}>
			{isArray ? (
				<form>
					{obj.map((item, index) => (
						<div>
							{Object.keys(item).map((ast, j) => (
								<div>
									{ast}:
									<input
										id={j}
										value={obj[index][ast]}
										onChange={(e) => handleChange(e, index, ast)}
										className={classes.emailInput}
									/>
								</div>
							))}
						</div>
					))}

					<button type="button" onClick={handleClick} className={classes.button}>
						Submit
					</button>
				</form>
			) : (
				<form>
					{Object.keys(obj).map((e, j) => (
						<div>
							{e}:
							<input id={j} value={keyValues[j]} onChange={handleChange} className={classes.emailInput} />
						</div>
					))}
					<button type="button" onClick={handleClick} className={classes.button}>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default ObjectModal;
