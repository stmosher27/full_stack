import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="profile-page">
          <Header logout={this.props.logout}/>
          <div className="profile-username">
            {this.props.currentUser.username}
          </div>
          <div className="profile-postsNum">

          </div>
          <div className="profile-postsNum">

          </div>
          <div className="profile-postsNum">

          </div>
          <div className="profile-name">
            {this.props.currentUser.name}
          </div>
          <ul className="user-posts">
            
          </ul>
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

export default withRouter(Profile);
