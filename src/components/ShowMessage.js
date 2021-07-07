import React from "react";


class ShowMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.wordsFunc = this.wordsFunc.bind(this);
       
    }

    componentDidMount() {
        // if (this.props.words.length >= 2) {
        //     this.setState({ word: [this.state.word, [...this.props.words]] })
        // }
        this.intervalId = setInterval(this.wordsFunc, 2000);

    }

   

    wordsFunc() {
        this.setState((state) => {
            const newCounter = this.props.words.length == this.state.counter ? 0 : state.counter++;
            console.log(newCounter)
            return { 
                counter: newCounter
             }
        })


    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {

        return (
            <div className="styleComponent">
                <p >I'm a {this.props.words[this.state.counter]}</p>
            </div>
        )
    }
}

export default ShowMessage;