import { Component } from 'react';
class Ex1 extends Component {
    state = {color:'white' } 

    changeColor=(event)=>{
        const buttonId = event.target.id;
        this.setState({ color: buttonId });
    }
    render() { 
        return (<>
        <h2>Ex1 div color change on button click</h2>
        <div style={{ backgroundColor: this.state.color, padding: '20px', margin: '30px' }}>
        <button id="yellow" onClick={this.changeColor}>yellow</button>
        <button id="black" onClick={this.changeColor}>black</button>
        <button id="pink" onClick={this.changeColor}>pink</button>
        <button id="orange" onClick={this.changeColor}>orange</button>
        <button id="red" onClick={this.changeColor}>red</button>
        <button id="brown" onClick={this.changeColor}>brown</button>
        <button id="purple" onClick={this.changeColor}>purple</button>
        <button id="blue" onClick={this.changeColor}>blue</button>
        </div>
        
        </>);
    }
}
 
export default Ex1;