import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styles from '../styles/PostList.module.css';

const PostList: React.FC = () => {
  const { items, status, error } = useSelector((state: RootState) => state.posts);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.postList}>
      {items.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;