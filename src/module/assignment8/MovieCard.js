import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import movieData from '../assignment6/data/movie.json';
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Avatar,
	IconButton,
	Button,
	Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
	mainContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		padding: '40px',
		backgroundColor: 'orange'
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
		backgroundColor: 'blue',
		display: 'flex',
		justifyContent: 'center',
		color: 'white'
	}
}));

export default function MovieCard() {
	const classes = useStyles();
	const history = useHistory();
	const handleClick = (item_id) => {
		history.push(`/carddetail/${item_id}`);
	};

	useEffect(() => {
		if (localStorage.getItem('isLogin') === undefined || localStorage.getItem('isLogin') === null) {
			history.push('/');
		}
	});

	return (
		<div className={classes.mainContainer}>
			{movieData.map((item) => (
				<Card className={classes.root} key={item.id}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe" className={classes.avatar}>
								{item.avatar}
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={item.title}
						subheader={item.date}
					/>
					<CardMedia className={classes.media} image={item.image} title={item.title} />
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{item.description}
						</Typography>
					</CardContent>
					<CardActions disableSpacing className={classes.buttonContainer}>
						<Button
							aria-label="add to favorites"
							style={{ color: 'white' }}
							onClick={() => handleClick(item.id)}
						>
							Know More
						</Button>
					</CardActions>
				</Card>
			))}
		</div>
	);
}
