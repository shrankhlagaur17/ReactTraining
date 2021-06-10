import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
	form: {
		'& .MuiTypography-body1': {
			font: `${theme.typography.fontWeightBold} ${theme.spacing(1.3)}px "Helvetica"`
		}
	}
}));

const GreenSwitch = withStyles({
	switchBase: {
		color: green[300],
		'&$checked': {
			color: green[500]
		},
		'&$checked + $track': {
			backgroundColor: green[500]
		}
	},
	checked: {},
	track: {}
})(Switch);

export default function SwitchButton(props) {
	const [ state, setState ] = React.useState({
		checkedA: true
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const classes = useStyles();
	return (
		<FormGroup>
			<FormControlLabel
				control={<GreenSwitch size="small" checked={state.checkedA} onChange={handleChange} name="checkedA" />}
				label={props.label}
				labelPlacement="bottom"
				className={classes.form}
			/>
		</FormGroup>
	);
}
