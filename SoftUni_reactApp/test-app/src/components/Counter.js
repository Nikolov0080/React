import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../counterCss.css'

class Counter extends Component {

    state = {
        counter: this.props.counter
    }

    addOne = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div className="main-container">
                Counter: <h1>{this.state.counter}</h1>
                <br></br>
                <Button variant="outline-success" onClick={this.addOne}>Add 1</Button>
            </div>
        )
    }
}

export default Counter;