import React, { Component } from 'react';

export class SaveMoneyCard extends Component {
	render() {
		return (
			<div className={'saveMoneyCardContainer'}>
				<h1 className={'h1tag'}>
					{'Save your '}
					<span className={'h1SpanTag'}>{'money now.'}</span>
				</h1>
				<p className={'description'}>
					{'Manage your company Bot in few easy steps, join our Pro plan to try a 360'}
					<span>&#176;</span>
					{' experience of our service.'}
				</p>
				<p className={'description'}>
					{
						'Start your 14 days of free plan, you can always upgrade it or stay with the Lite version for free.'
					}
				</p>
				<div className="imageContainer">
					<img src={'./image/Robot.png'} alt={'Robot'} />
				</div>
			</div>
		);
	}
}

export default SaveMoneyCard;
