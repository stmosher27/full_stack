import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);


  }

  render () {
    const user_profile_url = `/user/${this.props.comment.user_id}`;
    return(
      <div className="single-comment">
        <Link className="comment-link" to={user_profile_url} >{this.props.comment.username}</Link>
          <h3 className="comment-body">{this.props.comment.body}</h3>
      </div>
    );
  }
}

export default CommentItem;
