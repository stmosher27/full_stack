import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import PostsContainer from '../posts/posts_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="posts">
          <HeaderContainer />
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
