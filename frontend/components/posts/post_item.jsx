import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <li className="single-post">
        <label className="post-label">
          <div>
            author: {this.props.post.author_id}
          </div>
          <div>
            created: {this.props.post.created_at}
          </div>
        </label>
        <img className="post-img" src={this.props.post.img_url} alt="Post Pic" />
        <div className="post-desc">
          <h3>{this.props.post.description}</h3>
        </div>
      </li>
    );
  }
}

export default PostItem;
