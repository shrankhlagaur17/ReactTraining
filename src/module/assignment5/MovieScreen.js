import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Movies from './Movies';

import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
	button: {
		marginTop: '16px',
		width: '300px',
		height: '64px',
		borderRadius: '32px',
		fontSize: '16px',
		lineHeight: '1.5',
		boxShadow: '0 2px 4px 0 rgba(103, 194, 6, 0.3)',
		cursor: 'pointer'
	}
}));

const MovieScreen = () => {
	const classes = useStyles();
	const history = useHistory();

	const handleClick = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		localStorage.removeItem('username');
		localStorage.removeItem('isLogin');
		history.push('/');
	};

	useEffect(() => {
		if (localStorage.getItem('isLogin') === undefined || localStorage.getItem('isLogin') === null) {
			history.push('/');
		}
	}, []);
	return (
		<div style={{ backgroundColor: 'orange', height: '100vh' }}>
			<Movies />
			<div className={classes.root}>
				<Button onClick={handleClick} variant="contained" className={classes.button} color="secondary">
					Logout
				</Button>
			</div>
		</div>
	);
};

export default MovieScreen;
