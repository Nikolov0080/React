import React, { useState, useContext, useEffect, useCallback, } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import PageLayout from '../../components/pageLayout/index';
import style from './profile.module.css';
import getOrigamis from '../../getPosts/getPosts';
import UserContext from '../../context/userContext';
import PostsUser from '../../components/posts-user/posts-user'

const Profile = (props) => {

    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const [items, setItems] = useState({});
    const params = useParams()
    const context = useContext(UserContext);
    const history = useHistory();


    const logOut = () => {
        context.logOut();
        history.push('/');
    }

    const getUser = useCallback(async (id) => {

        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);

        const currentUser = await promise.json();

        if (!currentUser) {
            return history.push('/error')
        }

        const allOrigamis = await getOrigamis();

        const origamis = await allOrigamis.filter((item) => {
            return item.author._id === id
        });

        setUsername(currentUser.username);
        setPosts(currentUser.posts.length || 0);
        setItems(origamis)
    }, [history])

    useEffect(() => {
        getUser(params.id);
    }, [params.id, getUser])

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

            <PostsUser props={items} />

            <button onClick={logOut}>Logout</button>
        </PageLayout>
    )

}

export default Profile;