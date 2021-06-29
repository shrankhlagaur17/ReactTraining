import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import movieData from '../assignment6/data/movie.json';
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Backdrop,
	CircularProgress,
	Typography,
	Button,
	CardActions,
	Modal,
	Fade
} from '@material-ui/core';
import { GlobalContext } from './globalState';
import { UpdateUserList } from './action';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		backgroundColor: 'orange'
	},
	mainContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '40px',
		'& .MuiButton-contained:hover': {
			backgroundColor: 'blue'
		}
	},
	innerContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	},
	root: {
		maxWidth: 300,
		margin: '40px 10px'
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	avatar: {
		backgroundColor: 'blue'
	},
	logoutContainer: {
		width: '270px',
		padding: '40px 0'
	},
	button: {
		backgroundColor: 'blue',
		color: 'white'
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

const ListingScreen = () => {
	const { state, dispatch } = useContext(GlobalContext);
	const classes = useStyles();
	const history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		localStorage.removeItem('username');
		localStorage.removeItem('isLogin');
		history.push('/');
	};

	const userList = () => {
		dispatch(UpdateUserList(movieData));
	};

	useEffect(() => {
		if (localStorage.getItem('isLogin') === undefined || localStorage.getItem('isLogin') === null) {
			history.push('/');
		}
		userList();
	}, []);

	return (
		<div className={classes.wrapper}>
			<div className={classes.mainContainer}>
				<div className={classes.innerContainer}>
					{state &&
						state.list.map((item) => (
							<Card className={classes.root} key={item.id}>
								<CardHeader title={item.title} />
								<CardMedia className={classes.media} image={item.image} />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										{item.description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button className={classes.button} variant="contained" id={item.id}>
										Delete
									</Button>
								</CardActions>
							</Card>
						))}
				</div>
				<div className={classes.logoutContainer}>
					<Button className={classes.button} variant="contained" onClick={handleLogout}>
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ListingScreen;
