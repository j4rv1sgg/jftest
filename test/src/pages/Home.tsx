import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { fetchPosts } from '../store/postsSlice';
import PostList from '../components/PostList';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Blog</h1>
      <PostList />
    </div>
  );
};

export default Home;