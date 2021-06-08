import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import SelectPicker from './SelectPicker';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& .MuiPaper-elevation4': {
			boxShadow: 'none'
		},
		'& .MuiDrawer-paperAnchorDockedLeft': {
			borderRight: 'none',
			padding: '0 20px'
		},
		'& .MuiAppBar-colorPrimary': {
			backgroundColor: 'var(--bg)',
			color: 'black'
		}
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			backgroundColor: 'var(--bg)',
			color: 'black'
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: 'var(--bg)'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		backgroundColor: 'var(--bg)'
	},
	logo: {
		margin: '20px'
	},
	listItem: {
		'& .MuiTypography-body1': {
			font: `${theme.typography.fontWeightBold} ${theme.spacing(1.8)}px "Helvetica"`,
			color: 'var(--textGray)'
		}
	},
	heading: {
		font: `${theme.typography.fontWeightBold} ${theme.spacing(4)}px "Helvetica"`,
		[theme.breakpoints.down('sm')]: {
			fontSize: '18px'
		}
	},
	backButtonContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	backButton: {
		// width: '200px',
		backgroundColor: 'var(--darkLime)',
		color: 'var(--white)',
		height: '40px',
		fontWeight: '700',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px'
		}
	},
	headingContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	topics: {
		font: `${theme.typography.fontWeightBold} ${theme.spacing(1.5)}px "Helvetica"`,
		color: '#3a4e6fa8',
		padding: '30px 20px'
	},
	search: {
		width: '100%',
		padding: '0 30px',
		height: '50px',
		borderRadius: '25px',
		margin: '20px 0 0 0',
		boxShadow: '0 7px 15px 0 rgb(23 115 166 / 7%);',
		font: `${theme.typography.fontWeightMedium} ${theme.spacing(2)}px "Helvetica"`
	}
}));

function MainDrawer(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);

	const picker = [
		{
			id: 'en',
			title: 'ENG',
			image: './image/united-states.png'
		},
		{
			id: 'es',
			title: 'SPN',
			image: './image/united-states.png'
		}
	];

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const [ language, setLanguage ] = React.useState(
		localStorage.getItem('i18nextLng') !== null ? localStorage.getItem('i18nextLng').split('-')[0] : 'en'
	);
	const { i18n } = useTranslation();

	const changeLanguage = (e) => {
		const { value } = e.target;

		i18n.changeLanguage(value);
		setLanguage(value);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<img src="./image/logo.svg" alt="logo" className={classes.logo} />
			</div>
			<div className={classes.topics}>{'TOPICS'}</div>
			<List>
				{[
					'Affiliate Program',
					'Buy & Sell Cryptocurrencies',
					'Contact Us',
					'My Xcoins Account',
					'Orders',
					'Payment Methods',
					'Security',
					'Verification',
					'Wallet'
				].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} className={classes.listItem} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.headingContainer}>
						<Typography variant="h6" noWrap className={classes.heading}>
							{'Support'}
						</Typography>
						<div className={classes.backButtonContainer}>
							<SelectPicker
								handleChange1={(e) => changeLanguage(e)}
								picker={picker}
								defaultValue={language}
								isCustom={true}
								isClass={true}
							/>
							<Button className={classes.backButton}>{'Back to xcoins'}</Button>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<input type="search" className={classes.search} placeholder={'Search Xcoins Support'} />
				{props.mainScreen}
			</main>
		</div>
	);
}

MainDrawer.propTypes = {
	/**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
	window: PropTypes.func
};

export default MainDrawer;
