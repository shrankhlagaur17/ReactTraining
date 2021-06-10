import React from 'react';

import {
	Button,
	Toolbar,
	ListItem,
	List,
	IconButton,
	AppBar,
	Hidden,
	Drawer,
	CssBaseline,
	ListItemIcon,
	Tooltip,
	Typography,
	Grid,
	Paper
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import InfoIcon from '@material-ui/icons/Info';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MailIcon from '@material-ui/icons/Mail';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwitchButton from '../../components/buttons/SwitchButton';
import BuySell from './BuySell';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& .MuiPaper-elevation4': {
			boxShadow: ' 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%)'
		},
		'& .MuiDrawer-paperAnchorDockedLeft': {
			// borderRight: 'none',
		},
		'& .MuiFormControlLabel-labelPlacementBottom': {
			marginLeft: '0'
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
			backgroundColor: 'white',
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
	logoContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		minHeight: '64px'
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: 'var(--primary)'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		backgroundColor: 'var(--bg)'
	},
	listItem: {
		'& .MuiTypography-body1': {
			font: `${theme.typography.fontWeightBold} ${theme.spacing(1.8)}px "Helvetica"`,
			color: 'var(--textGray)'
		}
	},
	headingContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sideIconContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '2px 0'
	},
	sideIcons: {
		color: 'white',
		fontSize: 30
	},
	toolIcon: {
		color: 'white',
		fontSize: 30,
		display: 'flex',
		justifyContent: 'center'
	},
	buttonContainer: {
		'& .MuiButton-containedSecondary:hover': {
			backgroundColor: 'var(--hoverPrimary)',
			color: 'var(--white)'
		},
		'& .MuiButton-containedPrimary:hover': {
			backgroundColor: '#2b4d2b',
			color: 'var(--white)'
		}
	},
	signUpbutton: {
		backgroundColor: 'var(--secondary)',
		margin: '0 15px',
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: 1.75,
		'&: hover': {
			backgroundColor: 'var(--secondary)'
		}
	},
	logInbutton: {
		backgroundColor: 'var(--primary)',
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: 1.75
	},
	tooltip: {
		'& .MuiTooltip-tooltip': {
			color: 'var(--white)',
			backgroundColor: 'var(--primary)'
		}
	},
	textContainer: {
		color: 'var(--textGray)'
	},
	paper: {
		padding: '20px 0',
		display: 'flex',
		justifyContent: 'center'
	}
}));

function SubDrawer(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<div className={classes.logoContainer}>
					<MailIcon className={classes.toolIcon} />
				</div>
			</div>
			<List>
				{[
					<MailIcon className={classes.sideIcons} />,
					<InboxIcon className={classes.sideIcons} />,
					<QuestionAnswerIcon className={classes.sideIcons} />,
					<PlaylistAddIcon className={classes.sideIcons} />,
					<InfoIcon className={classes.sideIcons} />,
					<CopyrightIcon className={classes.sideIcons} />,
					<MailIcon className={classes.sideIcons} />,
					<QuestionAnswerIcon className={classes.sideIcons} />,
					<PlaylistAddIcon className={classes.sideIcons} />,
					<InfoIcon className={classes.sideIcons} />,
					<CopyrightIcon className={classes.sideIcons} />
				].map((text, index) => (
					<ListItem button key={text}>
						<Tooltip
							placement="right"
							title={
								<React.Fragment>
									<Typography className={classes.tooltip}>Buy & Sell</Typography>
								</React.Fragment>
							}
						>
							<ListItemIcon className={classes.sideIconContainer}>{text}</ListItemIcon>
						</Tooltip>
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
						<SwitchButton label="On" />
						<div className={classes.buttonContainer}>
							<Button
								variant="contained"
								className={classes.signUpbutton}
								color="primary"
								startIcon={<PersonAddIcon style={{ fontSize: '25px' }} />}
							>
								Sign Up Free
							</Button>
							<Button
								variant="contained"
								color="secondary"
								className={classes.logInbutton}
								startIcon={<FingerprintIcon style={{ fontSize: '25px' }} />}
							>
								Log In
							</Button>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
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

				<Grid container spacing={3}>
					<Grid item xs={6}>
						<BuySell />
					</Grid>
					<Grid item xs={6}>
						<Paper>
							<div className={classes.paper}>
								<Typography variant="h4" className={classes.textContainer}>
									Buy Monero. <br />Sell Monero. <br />
									Cash or online. <br /> Anywhere.
								</Typography>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}

export default SubDrawer;
