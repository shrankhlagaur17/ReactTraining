import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl1: {
		width: '40%',
		margin: '0 15px 0 0'
	},
	formControl: {
		width: '40%'
	},
	badge: {
		display: 'flex'
	},
	label: {
		color: 'var(--textGray)',
		display: 'flex'
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		margin: '0 10px'
	},
	icon: {
		margin: '3px 0 0 10px'
	}
}));

export default function SelectPicker(props) {
	const classes = useStyles();
	const history = useHistory();

	const handleItemClick = (item) => {
		history.push(`/edit/${item}`);
	};

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel id="demo-simple-select-outlined-label" className={classes.label}>
				<div className={classes.icon}>{props.label}</div>
			</InputLabel>
			<Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label={props.label}>
				{props.picker.map((item) => (
					<MenuItem key={item} value={item} onClick={() => handleItemClick(item)}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
