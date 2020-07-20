import React, { Component } from 'react';
import PageWrapper from '../../components/pageLayout/index';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import TextArea from '../../components/textarea/textArea';
import Origam from '../../components/origamis/origam';
import getPosts from '../../getPosts/getPosts';


class ShareThoughts extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            data: []
        }

        

        getPosts().then((posts) => {
            const firstThreePosts = posts.slice(posts.length - 3, posts.length);
            this.setState({
                data: firstThreePosts
            })
        })


        this.printPosts = () => {
            return this.state.data.map((post, i) => {
                return <Origam key={i} description={post.description} author={post.author} index={this.state.data.length - (i -= 1)} />
            })
        }

    }

    render() {
        return (
            <PageWrapper>

                <Title title="share your thoughts..." />
                <TextArea />
                <Button value="Post" />
                {this.printPosts()}

            </PageWrapper>
        )
    }
}


export default ShareThoughts;