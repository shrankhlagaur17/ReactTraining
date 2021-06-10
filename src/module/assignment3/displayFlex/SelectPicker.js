import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, Avatar } from '@material-ui/core';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl1: {
		width: '100%',
		margin: '0 15px 0 0'
	},
	formControl: {
		width: '100%'
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

export default function SimpleSelect(props) {
	const classes = useStyles();

	return (
		<FormControl variant="outlined" className={props.isLeft ? classes.formControl1 : classes.formControl}>
			<InputLabel id="demo-simple-select-outlined-label" className={classes.label}>
				{props.isCustom ? <img src={props.icon} alt="icon" /> : ''}
				<div className={classes.icon}>{props.label}</div>
			</InputLabel>
			<Select
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				value={props.defaultValue}
				onChange={props.handleChange1}
				label={props.label}
			>
				{props.picker.map((item) => (
					<MenuItem value={item.id}>
						{props.isCustom ? <Avatar src={item.image} className={classes.small} /> : ''}

						{item.title}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
