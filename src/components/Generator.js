import React from "react";
import { render } from "@testing-library/react";

class Generator extends React.Component {
    constructor(props){
        super(props);
this.state = {
 
    val: {inputValue: ""}
    }
console.log(this.state.val)
this.changeText = this.changeText.bind(this);
this.addValue = this.addValue.bind(this);
    }

changeText(evt){
console.log(evt.target.value)
this.setState({inputValue: evt.target.value})
console.log(this.state.inputValue)

}
addValue(evt){
 var value = evt.target.value;
 this.setState({[evt.target.name]: this.state.inputValue})
   evt.preventDefault();
   console.log(this.state)
}
    render(){
        return(
            <div>
                <form>
                    <label htmlFor="text">Add words
        <input type="text" value={this.state.inputValue} onChange={evt => this.changeText(evt)} name={this.state.val}/>
                    </label>
                    <label>
                        <button >Show value</button>
                        <button onClick={this.addValue}>Add value</button>
                    </label>
                </form>
                <div>
        <p>Im a {this.state.val.name}</p>
                </div>
            </div>
        )
    }
}

export default Generator;