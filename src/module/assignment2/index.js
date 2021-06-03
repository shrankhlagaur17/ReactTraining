import React, { Component } from 'react';
import SimpleBox from '../../components/simpleBox';
import './index.css';

const boxData = [
	{
		id: 1,
		title: '1) React Developer Tools',
		description:
			'Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage',
		image: './image/programmer.png',
		altName: 'programmer',
		isReverse: true
	},
	{
		id: 2,
		title: '2) Create React App',
		description: 'Tool used in the process of setting up a React IDE',
		image: './image/coding.png',
		altName: 'coding',
		isReverse: false
	},
	{
		id: 3,
		title: '3) Storybook',
		description: 'Online app that lets you create UI components',
		image: './image/layout.png',
		altName: 'layout',
		isReverse: true
	},
	{
		id: 4,
		title: '4) React Styleguidist',
		description: 'It offers an interactive way of creating and sharing UI',
		image: './image/file.png',
		altName: 'file',
		isReverse: false
	},
	{
		id: 5,
		title: '5) Bit',
		description: 'CLI tool and online platform that enables you to publish React components',
		image: './image/programmer.png',
		altName: 'programmer',
		isReverse: true
	},
	{
		id: 6,
		title: '6) React Bootstrap',
		description:
			'Powerful toolkit that comprises HTML, CSS, and JavaScript tools to help you create webpages and applications',
		image: './image/coding.png',
		altName: 'coding',
		isReverse: false
	},
	{
		id: 7,
		title: '7) React Sight',
		description:
			'Chrome extension for a visual illustration of all components of your app in a live tree structure',
		image: './image/programmer.png',
		altName: 'programmer',
		isReverse: true
	},
	{
		id: 8,
		title: '8) Why did you render',
		description: 'It alerts you in the console when an avoidable render occurs',
		image: './image/bootstrap.png',
		altName: 'bootstrap',
		isReverse: false
	},
	{
		id: 9,
		title: '9) React Proto',
		description: 'Lets you drag and drop the components your way to create a UI instead of coding',
		image: './image/programmer.png',
		altName: 'programmer',
		isReverse: true
	}
];

export class index extends Component {
	render() {
		return (
			<div className={'mainContainer'}>
				<header className={'innerContainer'}>
					<div className={'headingContainer'}>
						<h1>
							{'9 React Developer Tools '}
							<span className={'headSpan'}>{'to Create Better Apps Faster'}</span>
						</h1>
					</div>
					<div>
						<img src={'./image/backgroundImage.jpg'} alt={'background'} className={'reactImage'} />
					</div>
				</header>
				{boxData.map((item) => (
					<SimpleBox
						key={item.id}
						title={item.title}
						description={item.description}
						image={item.image}
						altName={item.altName}
						isReverse={item.isReverse}
					/>
				))}
				<footer className={'footer'}>
					<div className={'iconContainer'}>
						<img src={'./image/skype.png'} alt={'skype'} />
						<p>eluminous_bde10</p>
					</div>
					<span className={'dash'}>&#124;</span>
					<div className={'iconContainer'}>
						<img src={'./image/mail.png'} alt={'email'} />
						<p>blz@eluminoustechnologies.com</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default index;
