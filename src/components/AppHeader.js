import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logout } from '../icons/logout.svg';
import '../styles/app-header.scss';

const AppHeader = ({ isAuthenticated, user, onLogout }) => {

  const menu = isAuthenticated ? (
    <div className="links-container">
      <Link to="/" className="link">Home</Link>
      <Link to="/create" className="link">Create</Link>
    </div>
  ) : null;

  const rightSection = isAuthenticated ? (
    <div className="authed-section">
      <span className="username">{user && user.username}</span>
      <button className="icon-button" onClick={() => onLogout()}>
        <Logout/>
      </button>
    </div>
  ) : (
      <div className="links-container">
        <Link to="/login" className="link">Login</Link>
        <Link to="/signup" className="link"> Signup</Link>
      </div>
    )

  return (
    <div className="main-header">
      <div className="title">Text Categorizer</div>
      <div className="menu-container">
        {menu}
      </div>
      <div className="right-section">
        {rightSection}
      </div>
    </div>
  );
}

export default AppHeader;
