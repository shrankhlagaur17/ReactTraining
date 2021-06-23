import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import movieData from '../assignment6/data/movie.json';

const useStyles = makeStyles(() => ({
	mainContainer: {
		padding: '100px',
		display: 'flex',
		justifyContent: 'space-between',
		'& .MuiButton-contained:hover': {
			backgroundColor: 'orange'
		}
	},
	innerContainer: {
		width: '600px',
		backgroundColor: 'blue',
		padding: '30px',
		borderRadius: '20px',
		color: 'white'
	},
	button: {
		marginTop: '16px',
		width: '150px',
		height: '50px',
		borderRadius: '32px',
		fontSize: '16px',
		backgroundColor: 'orange',
		color: 'white',
		lineHeight: '1.5',
		boxShadow: '0 2px 4px 0 rgba(103, 194, 6, 0.3)',
		cursor: 'pointer'
	},
	image: {
		width: '400px',
		height: '400px'
	}
}));

const CardDetail = () => {
	const history = useHistory();
	const classes = useStyles();
	const [ film, setFilm ] = useState([]);
	const { id } = useParams();

	function findMovie(id, movieData) {
		for (let item of movieData) {
			if (item.id === id) {
				return item;
			}
		}
	}

	useEffect(
		() => {
			if (localStorage.getItem('isLogin') === undefined || localStorage.getItem('isLogin') === null) {
				history.push('/');
			}
			console.log('ID details', id, movieData);
			const movie = findMovie(id, movieData);
			const detail = movie.detail;
			setFilm(detail);
			console.log('filmDetails =>>>>>>>', film);
			console.log('Details =>>>>>>>', detail);
		},
		[ film, id, history ]
	);

	const handleClick = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		localStorage.removeItem('username');
		localStorage.removeItem('isLogin');
		history.push('/');
	};
	return (
		<div className={classes.mainContainer}>
			{film.map((item) => (
				<div key={item.detailId} className={classes.innerContainer}>
					<h1>{item.titles}</h1>
					<img src={item.images} alt="movie poster" className={classes.image} />
					<p>{item.descriptions}</p>
				</div>
			))}

			<Button onClick={handleClick} variant="contained" className={classes.button}>
				Logout
			</Button>
		</div>
	);
};

export default CardDetail;
