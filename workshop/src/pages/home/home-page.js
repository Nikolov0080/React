import PageLayout from '../../components/pageLayout/index';
import React, { useState, useEffect, useCallback } from 'react';
import style from '../../components/origamis/index.module.css';
import Title from '../../components/title/title';
import getOrigamis from '../../getPosts/getPosts'
import PostsUser from '../../components/posts-user/posts-user';

const Posts = () => {

  const [origamis, setOrigamis] = useState([]);

  useEffect(() => {
    const doJob = async () => {
      const result = await getOrigamis()
      setOrigamis(result);
    }

    doJob()
  }, []);

  return (
    <PageLayout>
      <div className={style.Posts}>
        <Title title="Publications" />
        <div>
          <PostsUser props={origamis} />
        </div>
      </div>
    </PageLayout>
  )

}

// class Posts extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       origamis: []
//     }
//   }

//   static contextType = UserContext;

//   async componentDidMount() {


//     this.setState({
//       origamis
//     });
//   }

//   render() {
//     return (
//       <PageLayout>

//         <div className={style.Posts}>
//           <Title title="Publications" />
//           <div>
//             {this.renderOrigamis()}
//           </div>
//         </div>
//       </PageLayout>

//     )
//   }
// }


//




export default Posts;
