import { Component } from 'react';
class Ex2 extends Component {
    state = {firstName:'',lastName:'',score:0 ,nameVisible:false} 

    changeColor=(event)=>{
        const buttonId = event.target.id;
        this.setState({ color: buttonId });
    }
    changeVisibilty=()=>{
        this.setState({ nameVisible: true });
    }
    handleBlur = () => {
        this.setState({ nameVisible: false });
      };
    render() { 
        return (<>
        <h2>Ex1 div color change on button click</h2>
        {this.state.nameVisible && <div style={{backgroundColor:'red'}}>Enter first name please</div>}
        <form action="">
            <label htmlFor="firstName">First Name</label>
            <input onFocus={this.changeVisibilty} onBlur={this.handleBlur}  type="text" /> 
            <label htmlFor="firstName">Last Name</label>
            <input type="text" />
            <label htmlFor="firstName">Score</label>
            <input type="number" />
        </form>
        
        </>);
    }
}
 
export default Ex2;