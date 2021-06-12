import React from 'react';

import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
	mainContainer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		padding: '40px'
	},
	root: {
		maxWidth: 300
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	avatar: {
		backgroundColor: 'orange'
	}
}));

const movieData = [
	{
		id: 1,
		avatar: 'R',
		title: 'Dangal',
		date: '23 December 2016',
		image: './image/Dangal-Movie-Review.jpg',
		description:
			'Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.'
	},
	{
		id: 2,
		avatar: 'S',
		title: 'Ring',
		date: '7 February 2003',
		image: './image/ring.jpg',
		description:
			"After her niece Katie's horrifying death, Rachel, a young journalist, investigates a mysterious videotape that kills its viewers within a week's time. It is a horror movie that is allowed to age group above 18."
	},
	{
		id: 3,
		avatar: 'T',
		title: 'Truman',
		date: '1 June 1998',
		image: './image/truman.jpg',
		description:
			'An insurance salesman is oblivious of the fact that his entire life is a TV show and his family members are mere actors. As he starts noticing things and uncovers the truth, he decides to escape.'
	}
];

export default function MovieCard(props) {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			{movieData.map((item) => (
				<Card className={classes.root}>
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
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							{item.id === 1 && props.rating} {item.id === 2 && Math.floor(Math.random() * 3)}
							{item.id === 3 && 3}
						</IconButton>
					</CardActions>
				</Card>
			))}
		</div>
	);
}
