import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/userSlice';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <li><button onClick={handleLogout}>Log Out</button></li>
          ) : (
            <li><Link to="/login">Sign In</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;