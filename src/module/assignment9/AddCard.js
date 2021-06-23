import React, { useEffect } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import InputField from '../assignment8/InputField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
	innerContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0 20px'
	},
	root: {
		margin: '20px 0'
	},
	heading: {
		textAlign: 'center',
		color: 'blue'
	},
	continueButton: {
		marginTop: '16px',
		width: '100%',
		height: '64px',
		borderRadius: '32px',
		border: '2px solid blue',
		color: 'blue',
		fontSize: '16px',
		lineHeight: '1.5',
		boxShadow: '0 2px 4px 0 rgba(103, 194, 6, 0.3)',
		cursor: 'pointer'
	}
}));

const AddCard = (props) => {
	const classes = useStyles();
	useEffect(() => console.log('addUser ===>>> in ADDcard ', props.addUser, props));
	return (
		<div>
			{props.isAdd ? (
				<Typography style={{ color: 'green' }}>Your card is successfully deleted!</Typography>
			) : (
				<div>
					<h3 className={classes.heading}>
						Here you can add <br />more cards to the list.
					</h3>
					<div className={classes.innerContainer}>
						<Formik
							initialValues={{
								first_name: 'morpheus',
								job: 'leader'
							}}
							validationSchema={Yup.object({
								first_name: Yup.string().required(' is required'),
								job: Yup.string()
									.min(3, 'job must contain atleast 3 characters')
									.max(15, 'job should not be more than 15 characters')
									.required('job is required and cannot be empty')
							})}
							onSubmit={(e) => {
								props.addUser(e);
							}}
						>
							{({ errors, touched }) => (
								<Form>
									<div className={classes.root}>
										<InputField
											label="First Name"
											id="first_name"
											name="first_name"
											type="text"
											placeholder="First Name"
											isRequired={true}
											autocomplete="false"
											errors={errors}
											touched={touched}
										/>
									</div>
									<div className={classes.root}>
										<InputField
											label="Last Name"
											id="last_name"
											name="last_name"
											type="text"
											placeholder="Last Name"
											isRequired={true}
											autocomplete="false"
											errors={errors}
											touched={touched}
										/>
									</div>
									<div className={classes.root}>
										<InputField
											label="Selfie"
											id="selfie"
											name="selfie"
											placeholder="Selfie"
											type="file"
											isRequired={true}
											autocomplete="false"
											errors={errors}
											touched={touched}
										/>
									</div>
									<div className={classes.root}>
										<InputField
											label="Email"
											id="email"
											name="email"
											placeholder="Email"
											type="email"
											isRequired={true}
											autocomplete="false"
											errors={errors}
											touched={touched}
										/>
									</div>

									<Button type="submit" variant="outlined" className={classes.continueButton}>
										Submit
									</Button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddCard;
