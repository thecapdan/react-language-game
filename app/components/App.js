import React from 'react';

import ImageDisplay from './ImageDisplay';
import Options from './Options';
import Result from './Result';
import Footer from './Footer';

import styles from '../styles/App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="header" style ={ { backgroundImage: "url('../images/headerbackground.png')" } }>
					<a>Speed Language Game</a>
				</div>
				<div className="leftbar">
					<ImageDisplay imageName="spoon" />
				</div>

				<div className="rightbartop">
					<Options />
				</div>

				<div className="rightbarbottom">
					<Result awaitingAnswer={true} isCorrect={false} />
				</div>

				<div className="footer">
					<Footer />
				</div>

			</div>
		);
	}
}

