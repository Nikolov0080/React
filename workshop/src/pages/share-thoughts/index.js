import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageWrapper from '../../components/pageLayout/index';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import TextArea from '../../components/textarea/textArea';
import Origam from '../../components/origamis/origam';
import getPosts from '../../getPosts/getPosts';
import data from '../../utils/getCookie';



const ShareThoughts = () => {

    const [posts, setPosts] = useState([]);
    const [publication, setPublication] = useState('');
    const history = useHistory();

    useEffect(() => {
        getPosts().then((posts) => {
            const firstThreePosts = posts.slice(posts.length - 3, posts.length);
            setPosts(firstThreePosts)
        });
    }, []);


    const printPosts = () => {
        return posts.map((post, i) => {
            return <Origam key={i} description={post.description} author={post.author} index={posts.length - (i -= 1)} />
        })
    }

    const share = async (e) => {
        e.preventDefault()
        console.log(data)

        const promise = await fetch('http://localhost:9999/api/origami', {
            method: "POST",
            body: JSON.stringify({ "description": publication, "_id": data.decoded.id }),
            headers: {
                'Content-Type': 'application/json',
                'auth': data.cookie
            }
        }).then(async (x) => { return await x.text() }
        ).then(response => {
            console.log('Post created')
            history.push('/')
        })


    }

    return (
        <PageWrapper>
            <form >
                <Title title="share your thoughts..." />
                <TextArea func={(event) => setPublication(event.target.value)} />
                <Button value="Post" onClick={share} />
            </form>


            {printPosts()}
        </PageWrapper>
    )
}



export default ShareThoughts;