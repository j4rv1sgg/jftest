import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userSlice';
import { AppDispatch, RootState } from '../store/store';
import styles from '../styles/LoginForm.module.css';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(username));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Logging in...' : 'Submit'}
      </button>
      {status === 'failed' && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;