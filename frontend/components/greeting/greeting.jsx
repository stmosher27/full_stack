import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login' activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign up</Link>
  </nav>
);

const _logout = (logout) => (
  logout().then(
    () => hashHistory.push('/')
  )
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={() => _logout(logout)}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
