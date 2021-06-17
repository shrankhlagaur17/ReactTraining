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
	Fade,
	CircularProgress,
	IconButton
} from '@material-ui/core';
import SelectPicker from './SelectPicker';
import DeleteIcon from '@material-ui/icons/Delete';
import AddForm from './AddForm';
import employee from '../assignment6/data/employee.json';

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
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	},
	head: {
		font: `${theme.typography.fontWeightBold} ${theme.spacing(2)}px "Helvetica"`
	},
	icon: {
		margin: theme.spacing(1)
	},
	editButton: {
		color: 'white',
		backgroundColor: '#3f51b5',
		fontSize: '0.875rem',
		minWidth: '64px',
		fontWeight: '500',
		lineHeight: '1.75',
		letterSpacing: ' 0.02857em',
		borderRadius: '4px',
		textTransform: 'uppercase',
		cursor: 'pointer',
		padding: '6px 16px',
		border: '1px solid #3f51b5'
	}
}));

export default function EmployeeTable() {
	const classes = useStyles();
	const [ field, setField ] = useState(1);
	const [ open, setOpen ] = useState(false);
	const [ edit, setEdit ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ editIndex, setEditIndex ] = useState('');
	const [ initialRows, setInitialRows ] = useState(employee);
	const [ rows, setRows ] = useState(employee);

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
		console.log('select', field);
		setField(e.target.value);
	};

	const handleOpen = () => {
		setOpen(true);
		setEdit(false);
	};

	const handleOpen1 = (e) => {
		setEditIndex(e.target.id);
		setOpen(true);
		console.log('setting index in emp table', editIndex, e.target.id);
		console.log('e etarget', e.target);
		setEdit(true);
	};

	const handleDelete = (id) => {
		let del = rows.splice(id, 1);
		addRows(del);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const nameSearch = (e) => {
		let input = e.target.value;
		if (input.length === 0) {
			setLoading(true);
			setTimeout(() => {
				setRows(initialRows);
				setLoading(false);
			}, 2000);
		} else {
			let newAry = rows.filter((item) => {
				if (field === 1) {
					return item.ename.toLocaleLowerCase() === input.toLocaleLowerCase();
				} else if (field === 2) {
					return item.email === input;
				} else {
					return 'No data found';
				}
			});
			console.log('newAry', newAry);
			if (newAry.length > 0) {
				setLoading(true);
				setTimeout(() => {
					setRows(newAry);
					setLoading(false);
				}, 2000);
			}
		}
	};

	const addRows = () => {
		const newRows = [ ...rows ];
		setLoading(true);
		setTimeout(() => {
			setRows(newRows);
			setLoading(false);
		}, 2000);
		setOpen(false);
	};

	return (
		<div>
			<div>
				<div className={classes.headContainer}>
					<SelectPicker picker={picker} handleChange1={(e) => handleChange(e)} defaultValue={field} />
					<input type="search" className={classes.input} placeholder="Search..." onKeyUp={nameSearch} />
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
							<AddForm
								rows={rows}
								addRows={addRows}
								handleClick={(e) => handleClose(e)}
								data_index={editIndex}
								isEdit={edit}
							/>
						</div>
					</Fade>
				</Modal>
			</div>
			<TableContainer component={Paper}>
				{loading ? (
					<Backdrop className={classes.backdrop} open={true}>
						<CircularProgress color="inherit" />
					</Backdrop>
				) : (
					''
				)}
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.head}>Employee Name</TableCell>
							<TableCell className={classes.head}>Username</TableCell>
							<TableCell className={classes.head}>Email</TableCell>
							<TableCell className={classes.head}>Location</TableCell>
							<TableCell className={classes.head}>Title</TableCell>
							<TableCell className={classes.head}>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.length > 0 ? (
							rows.map((row, i) => (
								<TableRow key={row.username}>
									<TableCell component="th" scope="row">
										{row.ename}
									</TableCell>
									<TableCell>{row.username}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.location}</TableCell>
									<TableCell>{row.title}</TableCell>
									<TableCell>
										<button onClick={handleOpen1} id={i} className={classes.editButton}>
											edit
										</button>
										{<DeleteIcon color="primary" id={i} onClick={() => handleDelete(i)} />}
									</TableCell>
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
