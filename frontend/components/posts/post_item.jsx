import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class PostItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(e) {
    e.preventDefault();
    let likes = this.props.post.likes;
    let flag = false;
    Object.keys(likes).map((likeId) => {
      if (likes[likeId].user_id === this.props.currUser.id){
        this.props.unlike(this.props.post.id);
        flag = true;
      }
    });
    if (flag === false)
      this.props.like(this.props.post.id);
  }

  render() {
    return(
      <li className="single-post">
        <label className="post-label">
          <div>
            author: {this.props.post.author_id}
          </div>
          <div>
            {this.props.post.published}
          </div>
        </label>
        <img className="post-img" src={this.props.post.img_url} alt="Post Pic" />
        <div className="likes">
          <input type="submit" onClick={this.toggleLike} className="like-logo" value='❤️'/>
          <h4 className="like-nums">{this.props.post.likes.length}</h4>
          <h4 className="likes">Likes</h4>
        </div>
        <div className="post-desc">
          <h3>{this.props.post.description}</h3>
        </div>
      </li>
    );
  }
}

export default PostItem;
