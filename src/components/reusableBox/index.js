import React, { Component } from 'react';

export class index extends Component {
	render() {
		// object destructuring
		const { heading, buttonTitle } = this.props;
		return (
			<div>
				<div className={this.props.extraClass}>
					<h3>{heading}</h3>
					<button>{buttonTitle}</button>
				</div>
			</div>
		);
	}
}

export default index;
