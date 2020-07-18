import PageLayout from '../../components/pageLayout/index';


import React, { Component } from 'react';
import style from '../../components/origamis/index.module.css';
import Origam from '../../components/origamis/origam';
import Title from '../../components/title/title';

class Posts extends Component {
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
      <PageLayout>
        <div className={style.Posts}>
          <Title title="Publications" />
          <div>
            {this.renderOrigamis()}
          </div>
        </div>
      </PageLayout>

    )
  }
}


//




export default Posts;
