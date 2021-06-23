import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field, ErrorMessage } from 'formik';

const useStyles = makeStyles((theme) => ({
	container: {
		'& input:focus': {
			backgroundColor: 'var(--white)! important',
			border: '1px solid var(--bg)',
			boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2)',
			textDecoration: 'none',
			color: 'var(--gray)',
			cursor: 'pointer',
			outline: 'none'
		},
		'& input:active': {
			backgroundColor: 'var(--white)! important',
			border: '1px solid var(--bg)',
			boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2)',
			textDecoration: 'none',
			color: 'var(--gray)',
			cursor: 'pointer',
			outline: 'none'
		},
		'& input::-webkit-file-upload-button': {
			visibility: 'hidden'
		}
	},
	emailInput: {
		width: '95%',
		height: '30px',
		font: `${theme.typography.fontWeightMedium} ${theme.spacing(2)}px "Helvetica"`,
		lineHeight: 1.78,
		color: 'var(--gray)!important',
		backgroundColor: 'var(--bg)',
		borderRadius: '10px',
		border: 'white',
		margin: '8px 0',
		cursor: 'text!important',
		padding: '12px 20px',
		'&: focus': {
			backgroundColor: 'var(--white)! important',
			boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2)'
		}
	},
	label: {
		font: `${theme.typography.fontWeightMedium} ${theme.spacing(2)}px "Helvetica"`,
		lineHeight: 1.63,
		letterSpacing: '0.00938em',
		margin: '5px 0',
		color: 'var(--textGray)',
		opacity: '0.5'
	},
	error: {
		font: `${theme.typography.fontWeightMedium} ${theme.spacing(2)}px "Helvetica"`,
		color: 'red',
		marginTop: '0.5rem',
		display: 'inline-block'
	},
	required: {
		color: 'red'
	},
	inputInvalid: {
		width: '95%',
		height: '30px',
		font: `${theme.typography.fontWeightMedium} ${theme.spacing(2.25)}px "Helvetica"`,
		lineHeight: 1.78,
		color: 'red !important',
		backgroundColor: 'var(--white)',
		borderRadius: '10px',
		border: '2px solid red',
		cursor: 'text!important',
		padding: '12px 20px'
	}
}));

const InputField = (props) => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.container}>
				<label htmlFor="email" className={classes.label}>
					{props.label}
				</label>

				<Field
					type={props.type}
					placeholder={props.placeholder}
					id={props.id}
					name={props.name}
					className={
						props.touched[props.name] && props.errors[props.name] ? (
							classes.inputInvalid
						) : (
							classes.emailInput
						)
					}
					required={props.isRequired}
					inputprops={{
						required: false
					}}
				/>
			</div>

			{props.touched[props.name] && props.errors[props.name] ? (
				<ErrorMessage name={props.name} component="div" className={classes.error} />
			) : (
				''
			)}
		</div>
	);
};

export default InputField;
