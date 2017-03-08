import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';
import merge from 'lodash/merge';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.showPosts = this.showPosts.bind(this);
    this.choosePosts = this.choosePosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPosts();
  }

  choosePosts(post) {
    let followingsIds = [];
    let followings = this.props.currentUser.followings;
    if (followings) {
      followings.forEach((obj) => {
        followingsIds.push(obj.followed_id);
      });
    }
    if ($.inArray(post.author_id, followingsIds) !== -1 || post.author_id === this.props.currentUser.id) {
      return(
        <PostItem post={post}
          key={post.id}
          like={this.props.like}
          unlike={this.props.unlike}
          fetchAllPosts={this.props.fetchAllPosts}
          currUser={this.props.currentUser}/>
      );
    }
  }

  showPosts() {
      return(
        <div className="all-posts">
          {this.props.posts.reverse().map(post => {
            return this.choosePosts(post);
          }
          )}
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
