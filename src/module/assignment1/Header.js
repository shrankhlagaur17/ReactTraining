import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<div className={'headerContainer'}>
				<div className={'h2Container'}>
					<h2 className={'h2tag'}>
						{'Start now your '}
						<span className={'h2SpanTag'}>{'free plan.'}</span>
					</h2>
				</div>
				<div className={'descriptionContainer'}>
					<p className={'description'}>
						{'Are you a corporate?'}
						<span className={'contactUs'}>{'Contact us'}</span>
					</p>
				</div>
			</div>
		);
	}
}

export default Header;
