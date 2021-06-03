import React, { Component } from 'react';
import Button from './Button';

export class LiteCard extends Component {
	render() {
		return (
			<div className={'liteCardContainer'}>
				<div className={'liteCard'}>
					<div className={'headingContainer'}>
						<div>
							<h3 className={'h3Lite'}>{this.props.heading}</h3>
							<span className={'dashSpan'}>&mdash;</span>
						</div>
						<div className={'innerHeadingContainer'}>
							<h3 className={'h3Free'}>{'Free'}</h3>
							<p className={'caption'}>{'with restrictions'}</p>
						</div>
					</div>
					<div>
						<p className={'planHeading'}>{'Plan includes:'}</p>
						<ul>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'liteCardPoints'}>
									{'Manage conversations directly from your website.'}
								</div>
							</li>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'liteCardPoints'}>{'Bot without the AI service.'}</div>
							</li>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'liteCardPoints'}>{'Achieved chat for 30 days.'}</div>
							</li>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'liteCardPoints'}>{'Free, for always.'}</div>
							</li>
						</ul>
					</div>
					<div className={'buttonContainer'}>
						<Button className={'button'} />
					</div>
				</div>
			</div>
		);
	}
}

export default LiteCard;
