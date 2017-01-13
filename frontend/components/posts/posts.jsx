import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';
import merge from 'lodash/merge';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.showPosts = this.showPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPosts();
  }

  showPosts() {
      return(
        <div className="all-posts">
          {this.props.posts.reverse().map(post => (
            <div key={post.id}>
              <PostItem post={post} />
            </div>
            // <div className="post-comments">
            //   <CommentContainer />
            // </div>
          ))}
        </div>
    );
  }

  render() {
    return(
      <div>
        {this.showPosts()}
      </div>
    );
  }
}

export default Posts;
