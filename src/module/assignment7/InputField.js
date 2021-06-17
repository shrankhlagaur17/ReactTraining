import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	formContainer: {
		display: 'flex',
		alignItems: 'center',
		margin: '20px 0',
		justifyContent: 'space-between'
	},
	input: {
		height: '25px',
		width: '200px',
		margin: '0 10px',
		fontSize: '16px',
		padding: '10px'
	}
}));

const InputField = (props) => {
	const classes = useStyles();


	return (
		<div className={classes.formContainer}>
			<p id="transition-modal-description">{props.label}</p>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				className={classes.input}
				value={props.value}
				onChange={(e) => props.handleChange(e)}
			/>
		</div>
	);
};

export default InputField;
