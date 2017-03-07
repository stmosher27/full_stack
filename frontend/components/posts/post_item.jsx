import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import CommentItem from './comment_item';
import CommentFormContainer from './comment_form_container';

class PostItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
    this.showComments = this.showComments.bind(this);
    this.chooseHeart = this.chooseHeart.bind(this);
  }

  toggleLike(e) {
    e.preventDefault();
    let likes = this.props.post.likes;
    let flag = false;
    Object.keys(likes).map((likeId) => {
      if (likes[likeId].user_id === this.props.currUser.id){
        this.props.unlike(this.props.post.id).then(
          this.props.fetchAllPosts(this.props.post.id)
        );
        flag = true;
      }
    });
    if (flag === false){
      this.props.like(this.props.post.id).then(
        this.props.fetchAllPosts(this.props.post.id)
      );
    }
  }

  showComments() {
    let commentList = [];
    if (this.props.post.comments) {
      this.props.post.comments.slice(Math.max(this.props.post.comments.length - 5, 1)).forEach((comment, i) => {
        if (commentList.length >= 5)
          return;
        commentList.push(<li className="single-comment" key={`${this.props.post.id}-${i}`}><CommentItem comment={comment} /></li>);
      });
    }
    return commentList;
  }

  chooseHeart() {
    const likes = this.props.post.likes;
    const likesUserId = Object.keys(likes).map(id => likes[id].user_id);
    const userLiked = (likesUserId.includes(this.props.currUser.id));
    let heart;
    if (userLiked) {
      return(
        <input className="like-button" type="submit" onClick={this.toggleLike} value='❤️'/>
      );
    } else {
      return(
        <input className="like-button" type="submit" onClick={this.toggleLike} value='♡'/>
      );
    }
  }

  render() {
    const user_profile_url = `/user/${this.props.post.author_id}`;
    return(
      <li key={this.props.post.id} className="single-post">
        <label className="post-label">
            <Link className="profile-link" to={user_profile_url} >{this.props.post.username}</Link>
          <div className="posted-at">
            {this.props.post.published}
          </div>
        </label>
        <img className="post-img" src={this.props.post.img_url} alt="Post Pic" />
        <div className="likes">
          {this.chooseHeart()}
          <h4 className="like-nums">{this.props.post.likes.length}</h4>
          <h4 className="likes-word">Likes</h4>
        </div>
        <div className="post-desc">
          <Link className="description-link" to={user_profile_url} >{this.props.post.username}</Link>
          <h3 className="description-post">{this.props.post.description}</h3>
        </div>
        <ul className="comments">
          {this.showComments()}
        </ul>
        <CommentFormContainer post={this.props.post} currentUser={this.props.currUser}/>
      </li>
    );
  }
}

export default PostItem;
