import PageLayout from '../../components/pageLayout/index';
import React, { Component } from 'react';
import style from '../../components/origamis/index.module.css';
import Origam from '../../components/origamis/origam';
import Title from '../../components/title/title';
import getOrigamis from '../../getPosts/getPosts'
import UserContext from '../../context/userContext';


class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origamis: []
    }
  }

  static contextType = UserContext;

  renderOrigamis = () => {
    const { origamis } = this.state;
    return (
      origamis.map((origami, index) => {
        return (
          <Origam key={index} index={index} {...origami} />
        )
      })
    )
  }

 async componentDidMount() {
    const origamis = await getOrigamis();

    this.setState({
      origamis
    });
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
