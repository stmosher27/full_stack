import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';
import PostsContainer from '../posts/posts_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="posts">
          <Header logout={this.props.logout}/>
          <PostsContainer />
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
