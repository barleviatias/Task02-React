import { Component } from 'react';
class Tirgol extends Component {
	state = { num1: 0, num2: 0, sum: 0 };

	onChangeN1 = (e) => {
		let num = Number(e.target.value);
		this.setState({ num1: num });
        console.log(num);
	};
	onChangeN2 = (e) => {
		let num = Number(e.target.value);
		this.setState({ num2: num });
		console.log(num);
	};
	onCalc = () => {
        let sum=this.num1 + this.num2
        console.log(sum);
		this.setState({ sum: this.state.num1 + this.state.num2 });
	};
	render() {
		return (
			<>
				<input onChange={this.onChangeN1} type="text" />
				<br></br>
				<input onChange={this.onChangeN2} type="text" /> <br />
				<button onClick={this.onCalc}>Sum</button>
				<h1>{this.state.sum}</h1>
			</>
		);
	}
}

export default Tirgol;
