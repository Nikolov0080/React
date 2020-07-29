import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/index';
import style from './profile.module.css';
import getOrigamis from '../../getPosts/getPosts';
import Origam from '../../components/origamis/origam'
import UserContext from '../../context/userContext';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null,
            origamis: [],
            currentUser: {}
        }
    }

    static contextType = UserContext;

    componentDidMount() {
        this.getUser(this.context.user.id);
        console.log(this.context.user)
    }

    getUser = async (id) => {

        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);

        const currentUser = await promise.json();

        this.setState({
            currentUser: currentUser.posts
        })
        if (!currentUser) {
            return this.props.history.push('/error')
        }

        const allOrigamis = await getOrigamis();

        const origamis = allOrigamis.filter((item) => {
            return item.author._id === id
        });

        this.setState({
            origamis,
            username: currentUser.username,
            posts: currentUser.posts.length || 0
        })
    }

    renderOrigamis = () => {
        const { origamis } = this.state;
        const origamisCut = origamis.slice(0, this.state.currentUser.length)
        return (
            origamisCut.map((origami, index) => {
                return (
                    <Origam key={index} index={index} {...origami} />
                )
            })
        )
    }

    logOut = () => {
        this.context.logOut();
        this.props.history.push('/');
    }

    render() {

        const {
            username,
            posts
        } = this.state;

        return (
            <PageLayout>
                <div className={style.profile}>
                    <img className={style.profile_image} src="https://picsum.photos/id/237/200/300" alt="profile-imagee" />
                    <div className={style.personal_info}>
                        <p className={style.p}>
                            <span>Username: </span>
                            {username}
                        </p>
                        <p className={style.p}>
                            <span>Posts: </span>
                            {posts}
                        </p>
                    </div>
                </div>

                {this.renderOrigamis()}

                <button onClick={this.logOut}>Logout</button>
            </PageLayout>
        )
    }

}

export default Profile;