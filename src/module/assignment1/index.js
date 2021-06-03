import React, { Component } from 'react';
import Header from './Header';
import './index.css';
import LiteCard from './LiteCard';
import ProCard from './ProCard';
import SaveMoneyCard from './SaveMoneyCard';

export class index extends Component {
	render() {
		return (
			<div className={'assignment'}>
				<div className={'mainContainer'}>
					<div className={'innerContainer'}>
						<SaveMoneyCard />
						<div>
							<Header />
							<div className={'cardContainer'}>
								<LiteCard heading={'lite'} />
								<ProCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
