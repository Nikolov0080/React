import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/index';
import getPosts from '../../getPosts/getPosts';
import Origam from '../../components/origamis/origam';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }


        getPosts().then((posts) => {
            const firstThreePosts = posts.slice(0, 3);
            this.setState({
                data: firstThreePosts
            })
        });

        this.printPosts = () => {
            return this.state.data.map((post, i) => {
                return <Origam key={i} description={post.description} author={post.author} index={i} />
            })
        }
    }



    render() {
        return (
            <PageLayout>

                {this.printPosts()}
            </PageLayout>
        )
    }

}

export default Profile;