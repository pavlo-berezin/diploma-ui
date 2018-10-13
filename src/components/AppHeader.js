import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app-header.scss';

const AppHeader = ({ isAuthenticated, user, onLogout }) => {

  const menu = isAuthenticated ? (
    <ul className="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create</Link></li>
    </ul>
  ) : null;

  const rightSection = isAuthenticated ? (
    <div className="authed-section">
      <span>{user && user.username}</span>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  ) : (
      <div className="links-container">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
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
