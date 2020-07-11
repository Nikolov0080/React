import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../counterCss.css'

class A extends Component {
    render() {
        return (
            <div>
                <h1>git data:</h1>
            </div>
        )
    }
}

class Counter extends Component {

    state = {
        counter: this.props.counter,

    }

    addOne = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }




    render() {
        return (
            <div>
                <div className="main-container">
                    Counter: <h1>{this.state.counter}</h1>
                    <br></br>
                    <Button variant="outline-success" onClick={this.addOne}>Add 1</Button>
                    <p></p>

                </div>

                <A />
            </div>

        )
    }
}

export default Counter;