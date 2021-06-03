import React, { Component } from 'react';

export class index extends Component {
	render() {
		const { title, image, description, isReverse, altName = '' } = this.props;

		return (
			<div className={isReverse ? 'rightTextContainer' : 'leftTextContainer'}>
				<div>
					<img src={image} alt={altName} />
				</div>
				<div className={'textContainer'}>
					<h2 className={'title'}>{title}</h2>
					<p className={'description'}>{description}</p>
				</div>
			</div>
		);
	}
}

export default index;
