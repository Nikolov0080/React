import React, { Component } from 'react';

class Input extends Component {

    state = {
        input: ''
    }

    getData = (e) => {
        this.setState({ input: e.target.value });
    }

    saveData = () => {
        if (this.state.input.length >= 6) {
            return this.state.input
        }
    }

    render() {
        return (
            <div>
                <h1>Hello user</h1>
                <input placeholder="Username" onChange={this.getData} />
                <br></br>
                <br></br>
                <br></br>
                <h1>{this.saveData()}</h1>
            </div>
        )
    }
}

export default Input;