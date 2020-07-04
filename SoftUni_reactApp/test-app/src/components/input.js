import React, { Component } from 'react';
import { Button } from 'react-bootstrap';




class Input extends Component {

    state = {
        input: ''
    }

    render() {
        return (
            <div>
                <h1>Hello user</h1>
                <input id="data" placeholder="Username" onChange={this.getData} />
                <br ></br>
                <Button >Click</Button>

            </div>
        )
    }
}

export default Input;