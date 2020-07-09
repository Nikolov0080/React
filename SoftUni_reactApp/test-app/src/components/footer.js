import React, { Component } from 'react';
import '../footerCss.css'


class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <div className="footer">
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Footer