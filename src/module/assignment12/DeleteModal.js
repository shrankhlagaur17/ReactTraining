import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
		margin: '30px 0',
		justifyContent: 'space-around'
	}
}));

const DeleteModal = (props) => {
	const classes = useStyles();
	return (
		<div>
			{props.isDel ? (
				<Typography style={{ color: 'red' }}>Your card is successfully deleted!</Typography>
			) : (
				<div>
					<Typography>Are you sure, you want to delete this card?</Typography>
					<div className={classes.buttonContainer}>
						<Button
							variant="outlined"
							color="primary"
							onClick={(e) => {
								props.handleClick(e);
							}}
						>
							{'No'}
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								props.handleDelete(e);
							}}
						>
							{'Yes'}
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteModal;
