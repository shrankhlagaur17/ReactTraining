import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from './InputField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		justifyContent: 'center',
		'& .MuiButton-root:hover': {
			backgroundColor: '#b0822f'
		}
	},
	root: {
		padding: '20px 0px 0px 0px'
	},
	passwordContainer: {
		marginTop: '1rem'
	},
	continueButton: {
		marginTop: '16px',
		width: '100%',
		height: '64px',
		borderRadius: '32px',
		backgroundColor: 'orange',
		color: 'white',
		fontSize: '16px',
		lineHeight: '1.5',
		boxShadow: '0 2px 4px 0 rgba(103, 194, 6, 0.3)',
		cursor: 'pointer'
	},
	heading: {
		textAlign: 'center',
		color: 'orange'
	}
}));

const SignupScreen = (props) => {
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		if (
			(localStorage.getItem('isLogin') !== undefined || localStorage.getItem('isLogin') !== null) &&
			localStorage.getItem('isLogin') === 'true'
		) {
			history.push('/movie');
		}
	}, []);

	return (
		<div>
			<h1 className={classes.heading}>Sign up to see movies</h1>
			<div className={classes.mainContainer}>
				<Formik
					initialValues={{
						username: 'Anton',
						email: 'avilov.design@gmail.com',
						password: '12345678'
					}}
					validationSchema={Yup.object({
						username: Yup.string()
							.min(3, 'Name must have atleast 3 characters!')
							.max(50, 'Name should not be more than 50 characters!')
							.matches(/^[a-zA-Z ]*$/, 'Name should be alphabets only!')
							.required('First name is required and cannot be empty'),
						email: Yup.string()
							.email('Email address should be valid')
							.required('Email address is required and cannot be empty'),
						password: Yup.string()
							.min(3, 'Password must contain atleast 3 characters')
							.max(15, 'Password should not be more than 15 characters')
							.required('Password is required and cannot be empty')
					})}
					onSubmit={(values) => {
						localStorage.setItem('email', values.email);
						localStorage.setItem('username', values.username);
						localStorage.setItem('password', values.password);
						history.push('/login');
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<div className={classes.root}>
								<InputField
									label="username"
									id="username"
									name="username"
									type="text"
									placeholder="username"
									isRequired={true}
									errors={errors}
									touched={touched}
								/>
							</div>
							<div className={classes.root}>
								<InputField
									label="Email Address"
									id="email"
									name="email"
									type="email"
									placeholder="Email Address"
									isRequired={true}
									autocomplete="false"
									errors={errors}
									touched={touched}
								/>
							</div>
							<div className={classes.passwordContainer}>
								<InputField
									label="Create password"
									id="password"
									name="password"
									placeholder="Create password"
									type="password"
									isRequired={true}
									autocomplete="false"
									errors={errors}
									touched={touched}
								/>
							</div>

							<Button type="submit" className={classes.continueButton}>
								SUBMIT
							</Button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default SignupScreen;
