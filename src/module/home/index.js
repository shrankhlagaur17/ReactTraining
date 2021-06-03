import React, { Component } from 'react';
import './index.css';
import ReusableBox from '../../components/reusableBox';

class Home extends Component {
	// renderBox(heading, buttonTitle, extraClass = '', styleObj = {}) {
	// 	return (
	// 		<div className={extraClass}>
	// 			<h3>{heading}</h3>
	// 			<button>{buttonTitle}</button>
	// 		</div>
	// 	);
	// }

	render() {
		return (
			<div className={'homeContainer'}>
				<h1 className={'h1tag'}>{'Home Page'}</h1>
				<ReusableBox heading={'My Container'} buttonTitle={'Click Me'} />
				{this.renderBox('First Container', 'Click Me 1', 'redClrTxt')}
				{this.renderBox('Second Container', 'Click Me 2', { backgroundColor: 'blue' })}
			</div>
		);
	}
}

export default Home;
