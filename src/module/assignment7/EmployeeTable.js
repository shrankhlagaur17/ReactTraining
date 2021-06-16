import React, { useState } from 'react';
import {
	makeStyles,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Modal,
	Backdrop,
	Fade
} from '@material-ui/core';
import SelectPicker from './SelectPicker';
import AddForm from './AddForm';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650
	},
	input: {
		height: '55px',
		width: '500px',
		margin: '0 20px',
		fontSize: '16px',
		padding: '10px'
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	fade: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	headContainer: {
		margin: '40px 0'
	}
}));

export default function EmployeeTable() {
	const classes = useStyles();
	const [ field, setField ] = useState('');
	const [ search, setSearch ] = useState('');
	const [ open, setOpen ] = useState(false);
	const [ rows, setRows ] = useState([]);
	console.log('rows1', rows);

	const picker = [
		{
			id: 1,
			title: 'Name'
		},
		{
			id: 2,
			title: 'Email'
		}
	];

	const handleChange = (e) => {
		setField(e.target.value);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const NameSearch = (e) => {
	// 	let input = e.target.value;
	// 	input = input.toUpperCase();
	// 	for (let i = 0; rows.length > 0; i++) {
	// 		if (!rows[i].toUpperCase().includes(input)) {
	// 			console.log('none');
	// 		} else {
	// 			console.log('rows', rows[i]);
	// 		}
	// 	}
	// };

	return (
		<div>
			<div>
				<div className={classes.headContainer}>
					<SelectPicker picker={picker} handleChange1={(e) => handleChange(e)} defaultValue={field} />
					<input type="search" className={classes.input} placeholder="Search..." />
					<Button variant="contained" color="primary" style={{ float: 'right' }} onClick={handleOpen}>
						Add Employee
					</Button>
				</div>
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
						<div className={classes.fade}>
							<AddForm setRows={setRows} rows={rows} />
						</div>
					</Fade>
				</Modal>
			</div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Employee Name</TableCell>
							<TableCell>Username</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Date of Joining</TableCell>
							<TableCell>Title</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.length > 0 ? (
							rows.map((row) => (
								<TableRow key={row.ename}>
									<TableCell component="th" scope="row">
										{row.ename}
									</TableCell>
									<TableCell>{row.username}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.doj}</TableCell>
									<TableCell>{row.title}</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell style={{ textAlign: 'center' }}>{'No data Found'}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
