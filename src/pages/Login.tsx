import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { data: user, status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (status === 'succeeded' && user) {
      navigate('/');
    }
  }, [status, user, navigate]);

  return (
    <div className={styles.loginPage}>
      <h1>Sign In</h1>
      <LoginForm />
    </div>
  );
};

export default Login;