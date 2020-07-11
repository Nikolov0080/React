import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../counterCss.css'
import data from '../scripts/fetchData'


class Counter extends Component {

    state = {
        counter: this.props.counter,
        items:'dsjhdjshd'
    }

    addOne = () => {
                this.setState({
                    counter: this.state.counter + 1
                });
            }

    render() {
            return(
            <div>
               
        <div className="main-container">
            Counter: <h1>{this.state.counter}</h1>
            <br></br>
            <Button variant="outline-success" onClick={this.addOne}>Add 1</Button>
            <p>{this.state.items}</p>

        </div>

            </div >

        )
}
}

export default Counter;