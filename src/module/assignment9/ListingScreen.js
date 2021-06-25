import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DeleteModal from './DeleteModal';
import api from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

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
import AddCard from './AddCard';
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
	buttonContainer: {
		width: '270px',
		padding: '40px 0'
	},
	logoutContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '30px 0'
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

export default function ListingScreen() {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { list } = useSelector((state) => state.userListReducer);

	const [ open, setOpen ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ addMore, setAddMore ] = useState(false);
	const [ isDel, setIsDel ] = useState(false);
	const [ isAdd, setIsAdd ] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleUser = () => {
		setAddMore(true);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const userList = () => {
		setLoading(true);
		const endPoint = 'api/users';
		const params = '';
		// setTimeout(() => {
		api.getApiCall(
			endPoint,
			params,
			(response) => {
				console.log('response status', response.status);
				console.log('response data', response.data.data);
				if (response.status === 200) {
					setLoading(false);
					dispatch(UpdateUserList(response.data.data));
				}
			},
			(error) => {
				console.log(error);
			}
		);
		// }, 1000);
	};

	const addUser = () => {
		const endPoint = 'api/users';
		const params = {
			name: 'morpheus',
			job: 'leader'
		};
		api.postApiCall(
			endPoint,
			params,
			(response) => {
				console.log('response status', response.status);
				const addObj = {
					id: response.data.id,
					first_name: response.data.name,
					last_name: response.data.job
				};
				if (response.status === 201) {
					const userAdd = [ ...list, addObj ];
					dispatch(UpdateUserList(userAdd));
					setIsAdd(true);
				}
				console.log('addObj =>>>>', addObj);
				setTimeout(() => {
					setOpen(false);
				}, 1000);
				setTimeout(() => {
					setIsAdd(false);
				}, 3000);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	const handleDelete = (e) => {
		const endPoint = 'api/users';
		const params = e.target.id;
		api.deleteApiCall(
			endPoint,
			params,
			(response) => {
				console.log('response status', response.status);
				if (response.status === 204) {
					setOpen(true);
					setIsDel(true);
				}
				setTimeout(() => {
					setOpen(false);
				}, 1000);
				setTimeout(() => {
					setIsDel(false);
				}, 2000);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		localStorage.removeItem('username');
		localStorage.removeItem('isLogin');
		localStorage.removeItem('token');
		history.push('/');
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
					{loading ? (
						<Backdrop className={classes.backdrop} open={true}>
							<CircularProgress color="inherit" />
						</Backdrop>
					) : (
						list.length > 0 &&
						list.map((item) => (
							<Card className={classes.root} key={item.id}>
								<CardHeader title={item.first_name + ' ' + item.last_name} />
								<CardMedia className={classes.media} image={item.avatar} />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										Hello! I am {item.first_name + ' ' + item.last_name}. You can email me at
										{item.email}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										className={classes.button}
										variant="contained"
										id={item.id}
										onClick={handleOpen}
									>
										Delete
									</Button>
								</CardActions>
							</Card>
						))
					)}

					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={open}>
							<div className={classes.paper}>
								{addMore ? (
									<AddCard addUser={(e) => addUser(e)} isAdd={isAdd} />
								) : (
									<DeleteModal
										handleClick={(e) => handleClose(e)}
										handleDelete={(e) => handleDelete(e)}
										isDel={isDel}
									/>
								)}
							</div>
						</Fade>
					</Modal>
				</div>
				<div className={classes.buttonContainer}>
					<Button className={classes.button} variant="contained" onClick={handleUser}>
						Add More +
					</Button>
				</div>
			</div>
			<div className={classes.logoutContainer}>
				<Button className={classes.button} variant="contained" onClick={handleLogout}>
					Logout
				</Button>
			</div>
		</div>
	);
}
