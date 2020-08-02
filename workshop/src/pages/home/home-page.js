import PageLayout from '../../components/pageLayout/index';
import React, { useState, useEffect } from 'react';
import style from '../../components/origamis/index.module.css';
import Title from '../../components/title/title';
import getOrigamis from '../../getPosts/getPosts'
import PostsUser from '../../components/posts-user/posts-user';
import Pagination from '../../components/pagination/pagination';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const doJob = async () => {
      const result = await getOrigamis()
      setPosts(result.reverse());
    }

    doJob()
  }, []);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <PageLayout>
      <div className={style.Posts}>
        <Title title="Publications" />
        <h3>Total posts: {posts.length}</h3>
        <div>
          <PostsUser props={currentPosts} />
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
      </div>
    </PageLayout>
  )

}





export default Posts;
