import React from 'react';
import { makeStyles } from '@material-ui/core';
import SelectPicker from './SelectPicker';
import data from './data/data.json';

const useStyles = makeStyles(() => ({
	container: {
		width: '89%',
		padding: '70px',
		backgroundColor: '#0cc7df21',
		height: '100vh'
	},
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
	suggestionBox: {
		width: '200px'
	}
}));

const Index = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<h1 style={{ textAlign: 'center' }}>Please select one of the following keys.</h1>
			<div className={classes.root}>
				<div className={classes.suggestionBox}>
					<div className={classes.innerContainer}>{Object.keys(data).map((e) => <p key={e}>{e}</p>)}</div>
				</div>
				<SelectPicker picker={Object.keys(data)} />
			</div>
		</div>
	);
};

export default Index;
