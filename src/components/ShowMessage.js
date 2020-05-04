import React from "react";


class ShowMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: []
        }
        console.log(this.state.word)
        this.wordsFunc = this.wordsFunc.bind(this);
        this.counter = 0;
        this.fireFunction = this.fireFunction.bind(this);
    }

    fireFunction() {
       
        this.setState(previousState => ({
            word: [...previousState.word, [...this.props.words]]
        }))
    
        console.log('here!' + this.props.words)
}

    componentWillMount() {
        // if (this.props.words.length >= 2) {
        //     this.setState({ word: [this.state.word, [...this.props.words]] })
        // }
        this.intervalId = setInterval(this.wordsFunc, 2000);
       
    }

    componentDidMount(){
        if(this.props.words > 0){
            this.fireFunction();
        }
    }

    wordsFunc() {
        if (this.counter < 2) {
            this.counter++
        } else { this.counter = 0 }
        console.log(this.counter)
        console.log(this.state.word)
      
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {

        return (
            <div>
                <p >I'm a {this.state.word}</p>
            </div>
        )
    }
}

export default ShowMessage;