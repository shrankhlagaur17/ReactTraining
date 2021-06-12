import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'orange',
		width: '35%',
		justifyContent: 'center'
	},
	image: {
		width: '400px'
	},
	buttons: {
		width: '300px',
		margin: '20px',
		height: '64px',
		borderRadius: '32px',
		fontSize: '16px',
		lineHeight: '1.5',
		boxShadow: '0 2px 4px 0 rgba(103, 194, 6, 0.3)',
		cursor: 'pointer'
	},
	divider: {
		textAlign: 'center'
	}
}));

const Index = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const handleClick = (path) => {
		console.log(history);
		history.push(path);
	};

	return (
		<div className={classes.mainContainer}>
			<div>
				<img src="./image/bgmovie.jpg" alt="background image" className={classes.image} />
			</div>
			<div className={classes.buttonContainer}>
				<div>
					<Button
						variant="contained"
						color="primary"
						onClick={() => handleClick('/login')}
						className={classes.buttons}
					>
						Login
					</Button>
					<div className={classes.divider}>or</div>
					<Button
						variant="contained"
						color="secondary"
						className={classes.buttons}
						onClick={() => handleClick('/signup')}
					>
						Sign Up
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Index;
