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
        <Link to={user_profile_url} >{this.props.comment.username}</Link>
          {this.props.comment.body}
      </div>
    );
  }
}

export default CommentItem;
