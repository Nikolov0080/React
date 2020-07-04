import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Counter extends Component {
   
        state = {
            counter: this.props.counter
        }

        addOne = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }
        
        addTen = () => {
            this.setState({
                counter: this.state.counter + 10
            })
        }

    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <br></br>
                <Button variant="outline-success" onClick={this.addOne}>Add 1</Button>
                <Button  variant="outline-success" onClick={this.addTen}>Add 10</Button>
            </div>
        )
    }
}

export default Counter;