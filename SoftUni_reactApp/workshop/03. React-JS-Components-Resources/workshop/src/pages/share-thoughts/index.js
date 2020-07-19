import React, { Component } from 'react';
import PageWrapper from '../../components/pageLayout/index';
import Title from '../../components/title/title';
import style from '../../components/pageLayout/wrapper.module.css'
import Button from '../../components/button/button';
import TextArea from '../../components/textarea/textArea';
import Origam from '../../components/origamis/origam';
import getPosts from '../../getPosts/getPosts';

const image = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"

class ShareThoughts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        getPosts().then((posts) => {
            const firstThreePosts = posts.slice(0,3);
            this.setState({
                data: firstThreePosts
            })
        })

    }

    render() {
        return (
            <PageWrapper>
                <div className={style.Posts}>
                    <Title title="share your thoughts..." />
                    <TextArea />
                    <Button value="Post" />
                    {this.state.data.map((post,i) => {
                      return <Origam key={i} description={post.description} author={post.author} index={i} />
                    })}
                </div>
            </PageWrapper>
        )
    }
}


export default ShareThoughts;