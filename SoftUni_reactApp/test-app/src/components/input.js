
import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.changeValue = (event) => {
            this.setState({
                value:event.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <input placeholder="Username"  />
                <br></br>
                <input placeholder="Password" onChange={this.changeValue} type="password" />
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default Input;