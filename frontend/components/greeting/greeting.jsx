import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

const sessionLinks = () => (
  <div>
    hello
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div>
    <h2>Hi, {currentUser.email}!</h2>
    <button onClick={logout}>Log Out</button>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
