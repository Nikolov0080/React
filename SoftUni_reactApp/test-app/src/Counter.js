import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.counter
        }
        this.addOne = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }
        this.addTen = () => {
            this.setState({
                counter: this.state.counter + 10
            })
        }


    }
    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <br></br>
                <button onClick={this.addOne}>Add 1</button>
                <button onClick={this.addTen}>Add 10</button>
            </div>
        )
    }
}

export default Counter;