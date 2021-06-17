import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import InputField from './InputField';

const useStyles = makeStyles(() => ({
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
		margin: '30px 0',
		justifyContent: 'space-around'
	}
}));

const AddForm = (props) => {
	const classes = useStyles();

	const [ ename, setEname ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ location, setLocation ] = useState('');
	const [ title, setTitle ] = useState('');

	useEffect(() => {
		if (props.isEdit) {
			const { ename, username, email, title, location } = props.rows[props.data_index];
			setEname(ename);
			setUsername(username);
			setEmail(email);
			setLocation(location);
			setTitle(title);
		}
	}, []);

	const handleChangeEname = (e) => {
		setEname(e.target.value);
	};
	const handleChangeUsername = (e) => {
		setUsername(e.target.value);
	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangeLocation = (e) => {
		setLocation(e.target.value);
	};
	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const onSubmit = () => {
		let result = { ename, username, email, location, title };
		if (ename === '' || username === '' || email === '' || location === '' || title === '') {
			alert('The field should not be empty');
		} else {
			const add = props.rows.splice(0, 0, result);
			props.addRows(add);
			console.log('result =>>>>', result);
			console.log('rows', props.rows);
		}
	};

	const onEdit = () => {
		let result = { ename, username, email, location, title };
		const edit = props.rows.splice(props.data_index, 1, result);
		props.addRows(edit);
		console.log('result1 => => =>', result);
		console.log('rows11', edit);
	};
	return (
		<div>
			<h2 id="transition-modal-title">
				Here you can {props.isEdit ? 'edit ' : 'add'} your <br /> employee details.
			</h2>
			<InputField
				label="Employee Name"
				name="ename"
				id="ename"
				type="name"
				value={ename}
				handleChange={(e) => handleChangeEname(e)}
			/>

			<InputField
				label="Username"
				name="username"
				id="username"
				type="name"
				value={username}
				handleChange={(e) => handleChangeUsername(e)}
			/>
			<InputField
				label="Email"
				name="email"
				id="email"
				type="email"
				value={email}
				handleChange={(e) => handleChangeEmail(e)}
			/>
			<InputField
				label="Location"
				name="location"
				id="location"
				type="text"
				value={location}
				handleChange={(e) => handleChangeLocation(e)}
			/>
			<InputField
				label="Title"
				name="title"
				id="title"
				type="name"
				value={title}
				handleChange={(e) => handleChangeTitle(e)}
			/>

			<div className={classes.buttonContainer}>
				<Button
					variant="outlined"
					color="primary"
					onClick={(e) => {
						props.handleClick(e);
					}}
				>
					{'Cancel'}
				</Button>
				<Button variant="contained" color="primary" onClick={props.isEdit ? onEdit : onSubmit}>
					{props.isEdit ? 'Edit' : 'Add'}
				</Button>
			</div>
		</div>
	);
};

export default AddForm;
