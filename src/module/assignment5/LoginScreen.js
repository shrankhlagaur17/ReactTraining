import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from './InputField';
import { Formik, Form, validateYupSchema } from 'formik';
import * as Yup from 'yup';

import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		justifyContent: 'center',
		'& .MuiButton-root:hover': {
			border: '2px solid #b0822f',
			color: '#b0822f',
			backgroundColor: '#f1d5ac'
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
		border: '2px solid orange',
		color: 'orange',
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

const LoginScreen = (props) => {
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
			<h1 className={classes.heading}>Login to see movies section</h1>
			<div className={classes.mainContainer}>
				<Formik
					initialValues={{
						email: 'avilov.design@gmail.com',
						password: '12345678'
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('Email address should be valid')
							.required('Email address is required and cannot be empty'),
						password: Yup.string()
							.min(3, 'Password must contain atleast 3 characters')
							.max(15, 'Password should not be more than 15 characters')
							.required('Password is required and cannot be empty')
					})}
					onSubmit={(values) => {
						localStorage.getItem('email');
						localStorage.getItem('password');
						if (localStorage.getItem('email') === null || localStorage.getItem('email') === undefined) {
							history.push('/signup');
						} else if (
							localStorage.getItem('email') === values.email &&
							localStorage.getItem('password') === values.password
						) {
							localStorage.setItem('isLogin', true);
							history.push('/movie');
						} else {
							alert('Invalid Credentials');
						}
					}}
				>
					{({ errors, touched }) => (
						<Form>
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

							<Button type="submit" variant="outlined" className={classes.continueButton}>
								LOGIN
							</Button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default LoginScreen;
