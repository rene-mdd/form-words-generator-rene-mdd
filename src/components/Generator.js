import React from "react";
import ShowMessage from "./ShowMessage"

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addVal: [],
            val: '',
            plug: false,
            errorMsg: ''
        }

        console.log(this.state)
        this.changeText = this.changeText.bind(this);
        this.addValue = this.addValue.bind(this);
        this.show = this.show.bind(this);
    }

    changeText(evt) {
        console.log(evt.target.value)
        this.setState({ val: evt.target.value })
    }

    addValue(evt) {
        // let peoplArrayClone = [...this.state.val];
        this.setState(previousState => ({
            addVal: [...previousState.addVal, this.state.val],
            val: ""
        }))
        console.log(this.state)
        evt.preventDefault();
    }

    show(e) {
        e.preventDefault();
        if (this.state.addVal.length > 2) {
            this.setState({ plug: true })
        }
        if(this.state.addVal.length < 2){
            this.setState({errorMsg: "You need to fill 3 words"})
        }
    }


    render() {
        return (
            <div className="main">
                {this.state.plug &&
                    <ShowMessage words={this.state.addVal} />
                }
                <form>
                    <label htmlFor="text">Add words <br/>
        <input type="text" value={this.state.val} onChange={evt => this.changeText(evt)} name={this.state.val} />
                    </label>
                    <label>
                        <button onClick={this.show}>Show message</button>
                        <button onClick={this.addValue}>Add new word</button>
                    </label>
                </form>
                <div>
            <p>{this.state.errorMsg}</p>
                </div>
            </div>
        )
    }
}

export default Generator;