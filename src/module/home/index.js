import React, { Component } from 'react';
import './index.css';

class Home extends Component {
	render() {
		return (
			<div className={'homeContainer'}>
				<h1 className={'h1tag'}>{'hello from world'}</h1>
				<h2 id={'h2tag'}>{'hello from world'}</h2>
			</div>
		);
	}
}

export default Home;
