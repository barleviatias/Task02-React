import { Component } from 'react'

export default class Ex3 extends Component {
  constructor(props) { 
    super(props);
    this.state = {
         tableWidth:"100%"
        };
    }



render(){
    return(
        <div>
          <h2>Ex3 table</h2>
    <table border="1" style={{width:this.state.tableWidth}} onClick={() =>{ this.setState({tableWidth:"100%"})}} onDoubleClick={() =>{ this.setState({tableWidth:"50%"})}}>
    <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
        <td>Row 1, Column 3</td>
    </tr>
    <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
        <td>Row 2, Column 3</td>
    </tr>
    </table>
        </div>
    )

  }
}


