import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/index';
import getPosts from '../../getPosts/getPosts';
import Origam from '../../components/origamis/origam';
import style from './profile.module.css';

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
                return <Origam key={i} description={"CURRENT USER POST  !!  " + post.description} author={post.author} index={i} />
            })
        }
    }

    render() {
        return (
            <PageLayout>
                <div className={style.profile}>
                    <img className={style.profile_image} src="https://picsum.photos/id/237/200/300" alt="profile-imagee" />
                    <div className={style.personal_info}>
                        <p className={style.p}>
                            <span>Email: </span>
                        testUser1@email.com
                       </p>
                        <p className={style.p}>
                            <span>Posts: </span>
                                9
                         </p>
                    </div>
                </div>
                {this.printPosts()}
            </PageLayout>
        )
    }

}

export default Profile;