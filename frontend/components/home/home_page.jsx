import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.router.push('/login'));
  }

  render() {
    return(
      <div>
        <Header />
        <h2>Hi!</h2>
        <button onClick={this.handleSubmit}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(HomePage);
