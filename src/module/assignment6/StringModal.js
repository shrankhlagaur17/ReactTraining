import React, { useState } from 'react';
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

const StringModal = ({ obj, myObjKey }) => {
	const classes = useStyles();
	const [ keyValues, setKeyValues ] = useState(obj);
	const handleChange = (e) => {
		setKeyValues(e.target.value);
	};
	const handleClick = () => {
		data[myObjKey] = keyValues;
		localStorage.setItem('myObject', JSON.stringify(data));
	};
	return (
		<div className={classes.root}>
			<form>
				<div>
					{myObjKey} :
					<input type="text" value={keyValues} onChange={handleChange} className={classes.emailInput} />
				</div>

				<button type="button" onClick={handleClick} className={classes.button}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default StringModal;
