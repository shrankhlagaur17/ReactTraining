import React, { useState } from 'react';
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
	const [ doj, setDoj ] = useState('');
	const [ title, setTitle ] = useState('');

	const handleChangeEname = (e) => {
		setEname(e.target.value);
	};
	const handleChangeUsername = (e) => {
		setUsername(e.target.value);
	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangeDoj = (e) => {
		setDoj(e.target.value);
	};
	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const onSubmit = () => {
		let result = { ename, username, email, doj, title };
		const add = props.rows.splice(0, 0, result);
		props.setRows(add);
		console.log('result', result);
		console.log('rows', props.rows);
	};

	return (
		<div>
			<h2 id="transition-modal-title">
				Here you can add your<br /> employee details.
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
				label="Date of Joining"
				name="doj"
				id="doj"
				type="date"
				value={doj}
				handleChange={(e) => handleChangeDoj(e)}
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
				<Button variant="outlined" color="primary">
					{'Cancel'}
				</Button>
				<Button variant="contained" color="primary" onClick={onSubmit}>
					{'Add'}
				</Button>
			</div>
		</div>
	);
};

export default AddForm;
