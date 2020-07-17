import React, { Component } from 'react';
import style from './index.module.css';
import Origam from './origam';

class Origamis extends Component {
    constructor(props) {
        super(props);

        this.state = {
            origamis: []
        }
    }

    renderOrigamis = () => {
        const { origamis } = this.state;
        return (
            origamis.map((origami, index) => {
                return (
                    <Origam key={origami._id} index={index} {...origami} />
                )
            })
        )
    }

    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami');
        const origamis = await promise.json()

        this.setState({
            origamis
        });
    }

    componentDidMount() {
        this.getOrigamis();
    }


    render() {
        return (
            <div className={style.Posts}>
                <h1>Origamis</h1>
                <div >
                    {this.renderOrigamis()}
                </div>
            </div>
        )
    }
}

export default Origamis;