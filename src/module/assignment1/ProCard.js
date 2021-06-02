import React, { Component } from 'react';
import Button from './Button';

export class ProCard extends Component {
	render() {
		return (
			<div className={'proCardContainer'}>
				<div className={'proCard'}>
					<div className={'headingContainer'}>
						<div>
							<h3 className={'h3Pro'}>{'Pro'}</h3>
							<span className={'dashSpan'}>&mdash;</span>
						</div>
						<div className={'innerHeadingContainer'}>
							<h3 className={'h3Free'}>{'29$'}</h3>
							<p className={'caption'}>{'monthly'}</p>
						</div>
					</div>
					<div>
						<p className={'planHeading'}>{'All of Lite plus:'}</p>
						<ul>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'proCardPoints'}>
									{
										"A Bot with AI that can recognize the user's behaviour and can automatize the sentence."
									}
								</div>
							</li>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'proCardPoints'}>{'Unlimited conversational flows.'}</div>
							</li>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'proCardPoints'}>
									{'Facebook, Twitter, Instagram and LinkedIn Integration.'}
								</div>
							</li>
							<li className={'pointsContainer'}>
								<div className={'tickSpan'}>✔</div>
								<div className={'proCardPoints'}>{'Achieved chat without limits.'}</div>
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

export default ProCard;
