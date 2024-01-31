import { Component } from 'react';

class Ex2 extends Component {
	state = {
		firstName: '',
		lastName: '',
		score: 0,
		nameVisible: false,
		text: '',
		pass: false,
        divFailed:false
	};

	changeColor = (event) => {
		const buttonId = event.target.id;
		this.setState({ color: buttonId });
	};

	changeVisibilty = (mytext) => {
		this.setState({ nameVisible: true, text: mytext });
	};

	handleBlur = () => {
		this.setState({ nameVisible: false });
	};
	handleBlurScore = (e) => {
		if (e.target.value > 555) {
			console.log(e.target.value);
			this.setState({ pass: true, nameVisible: false ,divFailed:false});
		} else {
			this.setState({ pass: false, nameVisible: false,divFailed:true });
		}
	};

	render() {
		return (
			<>
				<h2>Ex2 form send</h2>
				{this.state.nameVisible && (
					<div style={{ backgroundColor: 'red' }}>{this.state.text}</div>
				)}
				<form action="">
					<label htmlFor="firstName">First Name</label>
					<input
						onFocus={() => this.changeVisibilty('Enter first name please')}
						onBlur={this.handleBlur}
						type="text"
					/>
					<label htmlFor="lastName">Last Name</label>
					<input
						onFocus={() => this.changeVisibilty('Enter last name please')}
						onBlur={this.handleBlur}
						type="text"
					/>
					<label htmlFor="score">Score</label>
					<input
						onFocus={() => this.changeVisibilty('Enter last score please')}
						onBlur={this.handleBlurScore}
						type="number"
					/>
				</form>
				{this.state.pass && (
					<div style={{ backgroundColor: 'green' }}>we accept you</div>
				)}
				{this.state.divFailed  && (
					<div style={{ backgroundColor: 'blue' }}>try next year</div>
				)}
			</>
		);
	}
}

export default Ex2;
