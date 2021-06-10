import React from 'react';
import { Button, Paper, makeStyles, TextField } from '@material-ui/core';
import SelectPicker from '../assignment3/displayFlex/SelectPicker';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '20px'
	},
	buttonContainer: {
		display: 'flex',
		'& .MuiButton-contained:hover': {
			backgroundColor: 'var(--hoverPrimary)'
		}
	},
	inputContainer: {
		display: 'flex',
		margin: '20px 0 0 0',
		'& .MuiInputLabel-outlined': {
			fontSize: '18px'
		}
	},
	buybutton: {
		backgroundColor: 'var(--primary)',
		margin: '0 15px 0 0',
		font: `${theme.typography.fontWeightBold} ${theme.spacing(2.3)}px "Helvetica"`,
		lineHeight: 1.75,
		width: '100%',
		height: '50px',
		color: 'var(--white)',
		boxShadow: 'none'
	},
	sellbutton: {
		lineHeight: 1.75,
		font: `${theme.typography.fontWeightBold} ${theme.spacing(2.3)}px "Helvetica"`,
		width: '100%',
		color: 'rgba(0, 0, 0, 0.50)'
	},
	formControl1: {
		width: '100%',
		margin: '0 15px 0 0'
	},
	formControl: {
		width: '100%! important'
	}
}));

const BuySell = () => {
	const classes = useStyles();
	const [ values, setValues ] = React.useState('');

	const handleChange1 = (event) => {
		setValues(event.target.value);
	};

	const [ amount, setAmount ] = React.useState('');

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	const picker = [
		{
			id: 'en',
			title: 'ENG',
			image: './image/united-states.png'
		},
		{
			id: 'es',
			title: 'SPN',
			image: './image/spain.png'
		}
	];

	return (
		<Paper className={classes.paper}>
			<div className={classes.buttonContainer}>
				<Button
					variant="contained"
					className={classes.buybutton}
					startIcon={<AddShoppingCartIcon style={{ fontSize: '25px' }} />}
				>
					Buy
				</Button>
				<Button
					variant="outlined"
					className={classes.sellbutton}
					startIcon={<AddShoppingCartIcon style={{ fontSize: '25px', color: 'rgba(0, 0, 0, 0.50)' }} />}
				>
					Sell
				</Button>
			</div>
			<div className={classes.inputContainer}>
				<TextField id="outlined-basic" label="Amount" variant="outlined" className={classes.formControl1} />
				<SelectPicker
					picker={picker}
					handleChange1={(e) => handleChange(e)}
					defaultValue={amount}
					label={'INR'}
				/>
			</div>

			<div className={classes.inputContainer}>
				<SelectPicker
					picker={picker}
					handleChange1={(e) => handleChange1(e)}
					className={classes.formControl1}
					defaultValue={values}
					icon={'./image/india.png'}
					label={'India'}
					isCustom={true}
					isLeft={true}
				/>

				<SelectPicker
					picker={picker}
					handleChange1={(e) => handleChange1(e)}
					defaultValue={values}
					icon={'./image/earth-grid-symbol.png'}
					label={'All online offers'}
					isCustom={true}
				/>
			</div>
		</Paper>
	);
};

export default BuySell;
