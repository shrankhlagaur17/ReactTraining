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
	const [ enameErr, setEnameErr ] = useState({});
	const [ username, setUsername ] = useState('');
	const [ usernameErr, setUsernameErr ] = useState({});
	const [ email, setEmail ] = useState('');
	const [ emailErr, setEmailErr ] = useState({});
	const [ location, setLocation ] = useState('');
	const [ locationErr, setLocationErr ] = useState({});
	const [ title, setTitle ] = useState('');
	const [ titleErr, setTitleErr ] = useState({});

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
		const isValid = formValidation();
		setEname(e.target.value);
	};
	const handleChangeUsername = (e) => {
		const isValid = formValidation();
		setUsername(e.target.value);
	};
	const handleChangeEmail = (e) => {
		const isValid = formValidation();
		setEmail(e.target.value);
	};
	const handleChangeLocation = (e) => {
		const isValid = formValidation();
		setLocation(e.target.value);
	};
	const handleChangeTitle = (e) => {
		const isValid = formValidation();
		setTitle(e.target.value);
	};

	const onSubmit = () => {
		const isValid = formValidation();
		let result = { ename, username, email, location, title };
		if (isValid === true) {
			const add = props.rows.splice(0, 0, result);
			props.addRows(add);
		}
		console.log('result =>>>>', result);
		console.log('rows', props.rows);
	};

	const onEdit = () => {
		const isValid = formValidation();
		let result = { ename, username, email, location, title };
		const edit = props.rows.splice(props.data_index, 1, result);
		if (isValid === true) {
			props.addRows(edit);
		}
		console.log('result1 => => =>', result);
		console.log('rows11', edit);
	};

	const formValidation = () => {
		const enameErr = {};
		let isValid = true;
		if (ename.trim().length < 3) {
			enameErr.enameShort = "Employee name can't be empty or too Short";
			isValid = false;
		} else {
			enameErr.enameShort = '';
			isValid = true;
		}
		if (username.trim().length < 3) {
			usernameErr.usernameShort = "Username can't be empty or too Short";
			isValid = false;
		} else {
			usernameErr.usernameShort = '';
			isValid = true;
		}

		if (email.trim().length < 3) {
			emailErr.emailShort = "Email can't be empty or too Short";
			isValid = false;
		} else {
			emailErr.emailShort = '';
			isValid = true;
		}
		if (!email.includes('@')) {
			emailErr.emailShort = 'Email is not valid';
			isValid = false;
		} else {
			emailErr.emailShort = '';
			isValid = true;
		}
		if (location.trim().length < 3) {
			locationErr.locationShort = "Location can't be empty or too Short";
			isValid = false;
		} else {
			locationErr.locationShort = '';
			isValid = true;
		}
		if (title.trim().length < 3) {
			titleErr.titleShort = "Title can't be empty or too Short";
			isValid = false;
		} else {
			titleErr.titleShort = '';
			isValid = true;
		}

		setEnameErr(enameErr);
		setUsernameErr(usernameErr);
		setEmailErr(emailErr);
		setLocationErr(locationErr);
		setTitleErr(titleErr);
		return isValid;
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
				error={enameErr}
				value={ename}
				handleChange={(e) => handleChangeEname(e)}
			/>

			<InputField
				label="Username"
				name="username"
				id="username"
				type="name"
				error={usernameErr}
				value={username}
				handleChange={(e) => handleChangeUsername(e)}
			/>
			<InputField
				label="Email"
				name="email"
				id="email"
				type="email"
				error={emailErr}
				value={email}
				handleChange={(e) => handleChangeEmail(e)}
			/>
			<InputField
				label="Location"
				name="location"
				id="location"
				type="text"
				error={locationErr}
				value={location}
				handleChange={(e) => handleChangeLocation(e)}
			/>
			<InputField
				label="Title"
				name="title"
				id="title"
				type="name"
				error={titleErr}
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
