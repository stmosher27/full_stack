import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <Header logout={this.props.logout}/>
          <h2>Hi, {this.props.currentUser.name}!</h2>
        </div>
      );
    } else {
      return(
        <div>

        </div>
      );
    }
  }
}

export default withRouter(HomePage);
