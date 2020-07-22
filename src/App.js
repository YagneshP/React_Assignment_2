import React, { Component } from 'react';

// import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
	state = {
		textLength: 0,
		text: ''
	};
	lengthCalculate = (event) => {
		this.setState({
			textLength: event.target.value.length,
			text: event.target.value
		});
	};
	deleteCharacter = (i) => {
		const text = this.state.text;
		const textArray = text.split('');
		textArray.splice(i, 1);
		this.setState({
			text: textArray.join('')
		});
	};
	render() {
		return (
			<div className="App">
				<input type="text" onChange={this.lengthCalculate} value={this.state.text} />
				<Validation text={this.state.text} />
				<Char text={this.state.text} delete={this.deleteCharacter} />
			</div>
		);
	}
}

export default App;
