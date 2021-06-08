import React from 'react';
import MainDrawer from './MainDrawer';
import './index.css';
import CardsScreen from './CardsScreen';

const index = () => {
	return (
		<div>
			<MainDrawer mainScreen={<CardsScreen />} />
		</div>
	);
};

export default index;
