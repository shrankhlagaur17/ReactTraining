import React from 'react';

const index = (props) => {
	return (
		<div className={'card'}>
			<div className={'textContainer'}>
				<h2>{props.heading}</h2>
				<ul>
					<li>{props.list1}</li>
					<li>{props.list2}</li>
					<li>{props.list3}</li>
					<li>{props.list4}</li>
					<p className={'anchor'}>{props.anchor}</p>
				</ul>
			</div>
		</div>
	);
};

export default index;
