import React from 'react';
import MovieCard from './MovieCard';

export class Movies extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { rating: 1 };
	}

	componentDidMount() {
		console.log('hello');
		this.count = setInterval(() => this.rate(), 5000);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps);
		console.log(nextState);
		return true;
	}

	componentWillUnmount() {
		clearInterval(this.count);
	}

	rate() {
		this.setState({
			rating: this.state.rating + 1
		});
	}

	render() {
		return (
			<div>
				<MovieCard rating={this.state.rating} />
			</div>
		);
	}
}

export default Movies;
