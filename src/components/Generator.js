import React from "react";
import ShowMessage from "./ShowMessage"

class Generator extends React.Component {
    constructor(props){
        super(props);
this.state = {
    addVal: [],
    val: []
    }

console.log(this.state)
this.changeText = this.changeText.bind(this);
this.addValue = this.addValue.bind(this);
}

changeText(evt) {
console.log(evt.target.value)
this.setState({val: [...evt.target.value].join("")})
}


addValue(evt) {
    // let peoplArrayClone = [...this.state.val];
 this.setState(previousState => ({
     addVal: [...previousState.addVal, [...this.state.val].join("")],
     val: []
 }))
 
   console.log(this.state)
   evt.preventDefault();
}


    render(){
        return(
            <div>
                {
                <ShowMessage words={this.state.addVal}/>
    }
                <form>
                    <label htmlFor="text">Add words
        <input type="text" value={this.state.val} onChange={evt => this.changeText(evt)} name={this.state.val}/>
                    </label>
                    <label>
                        <button >Show message</button>
                        <button onClick={this.addValue}>Add value</button>
                    </label>
                </form>
                <div>
        <p>Im a {this.state.val} updated {this.state.addVal}</p>
                </div>
            </div>
        )
    }
}

export default Generator;