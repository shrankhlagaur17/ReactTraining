import React, { Component } from 'react';

export class Button extends Component {
	render() {
		return (
			<div>
				<p className={'buttonHeading'}>{'View all the features'}</p>
				<button className={'button'}>{'Start 14 days of free Pro plan'}</button>
			</div>
		);
	}
}

export default Button;
