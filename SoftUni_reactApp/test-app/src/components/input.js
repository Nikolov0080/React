import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Input extends Component {

    state = {
        input: '',
        isClicked: false
    }

    getData = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    showData = () => {
        this.setState({
            isClicked: this.state.isClicked = true
        })
    }

    createElement = () => {
        setTimeout(() => {
            this.setState({
                isClicked: this.state.isClicked = false
            })
        }, 2000)

        const result = this.state.input.split('').reduce((acc, val) => {
            return +acc + +val;
        }, '');

        if (result) { return result; }

        return 'Please enter valid input'
    }


    render() {
        return (
            <div>
                <h1>Enter some digits</h1>
                <input type="number" placeholder="Username" onChange={this.getData} />
                <br></br>
                <Button onClick={this.showData} >Click</Button>
                {this.state.isClicked === false ?
                    <h3>sum is: ....</h3> :
                    <h1>sum is: {this.createElement()} </h1>}

            </div>
        )
    }
}

export default Input;