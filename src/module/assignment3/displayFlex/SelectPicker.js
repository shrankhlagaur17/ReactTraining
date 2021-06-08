import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, Avatar } from '@material-ui/core';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 80,
		'& .MuiInputBase-root.MuiSelect-select:focus': {
			backgroundColor: '#e8f4fd !important'
		}
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		margin: theme.spacing(1)
	},
	large: {
		width: theme.spacing(8),
		height: theme.spacing(8)
	},
	badge: {
		display: 'flex'
	},
	titleLanguage: {
		marginTop: '0.70rem',
		fontFamily: 'AkkuratPro',
		fontSize: '12px',
		fontWeight: 'bold',
		lineHeight: 1.67,
		letterSpacing: '1px',
		color: '#3a4e6f'
	},
	FooterTitleLang: {
		marginTop: '0.10rem',
		fontFamily: 'AkkuratPro',
		fontSize: '12px',
		fontWeight: 'bold',
		lineHeight: 1.67,
		letterSpacing: '1px',
		color: '#3a4e6f'
	},
	titleCurrency: {
		fontFamily: 'CircularStd',
		fontSize: '26px',
		lineHeight: 1.38,
		color: '#3a4e6f',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem'
		}
	}
}));

export default function SimpleSelect(props) {
	const classes = useStyles();

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">
					<small>{props.title}</small>
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={props.defaultValue}
					onChange={(e) => props.handleChange1(e)}
					label=""
				>
					{props.picker.map((item) => (
						<MenuItem value={item.id} key={item.id}>
							<div className={`${classes.badge} `}>
								{props.isCustom ? (
									<Avatar
										alt="flag"
										src={item.image !== undefined ? item.image : ''}
										className={classes.small}
									/>
								) : (
									''
								)}
								{props.isClass ? (
									<small className={props.isFooter ? classes.FooterTitleLang : classes.titleLanguage}>
										{item.title}
									</small>
								) : (
									<strong className={classes.titleCurrency}>{item.title}</strong>
								)}
							</div>
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
