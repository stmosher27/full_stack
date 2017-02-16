import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import Modal from 'react-modal';
import ProfileItem from './profile_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.userPictures = this.userPictures.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params.userId !== this.props.params.userId) {
      this.props.fetchUser(nextProps.params.userId);
    }
  }

  userPictures() {
    if (this.props.user.id) {
      if (this.props.posts.length === 0) {
        return(
          <div className='user-pics'>
            No Uploads Yet!
          </div>
        );
      } else {
        return(
          <ul className="user-pics">
            {this.props.user.posts.reverse().map(post => (
              <li key={post.id}>
                <ProfileItem post={post} user={this.props.user.username}/>
              </li>
            ))}
        </ul>
      );}
    }
  }

  followButton() {
    let flag = false;
    const that = this;
    this.props.user.followers.map((follow, idx) => {
      if (that.props.user.followers[idx].follower_id === that.props.currentUser.id){
        flag = true;
      }
    });
    if (flag === true) {
      return(
        <div className="unfollow-button-text">
          Unfollow
        </div>
      );
    } else {
      return(
        <div className="follow-button-text">
          Follow
        </div>
      );
    }
  }

  toggleFollow(e) {
    e.preventDefault();
    let userFollowers = this.props.user.followers;
    let currUserFollowings = this.props.currentUser.followings;
    let flag = false;
    const that = this;
    (userFollowers).map((follow, idx) => {
      if (that.props.user.followers[idx].follower_id === that.props.currentUser.id){
        that.props.unfollow(that.props.user.id).then(
          that.props.fetchUser(that.props.user.id)

        );
        flag = true;
      }
    });
    if (flag === false){
      that.props.follow(that.props.user.id).then(
        that.props.fetchUser(that.props.user.id)
      );
    }
  }

  render() {
    let numPosts = 0;
    let numFollowers = 0;
    let numFollowings = 0;
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.params.userId) {
        if (this.props.user.posts) {
          numPosts = this.props.user.posts.length;
        }
        if (this.props.user.followers) {
          numFollowers = this.props.user.followers.length;
        }
        if (this.props.user.followings) {
          numFollowings = this.props.user.followings.length;
        }
        return(
          <div className="profile-page">
            <div className="prof-info">
              <HeaderContainer />
              <div className="profile-username">
                {this.props.currentUser.username}
              </div>
              <div className="profile-details">
                <label className="details">{numPosts} posts</label>
                <label className="details-after">{numFollowers} followers</label>
                <label className="details-after">{numFollowings} following</label>
              </div>
              <div className="profile-name">
                {this.props.currentUser.name}
              </div>
            </div>
            <div className="user-pics">
              {this.userPictures()}
            </div>
          </div>
        );
      } else {
        if (this.props.user.followers) {
          if (this.props.user.posts) {
            numPosts = this.props.user.posts.length;
          }
          if (this.props.user.followers) {
            numFollowers = this.props.user.followers.length;
          }
          if (this.props.user.followings) {
            numFollowings = this.props.user.followings.length;
          }
          return(
            <div className = "profile-page">
              <div className="prof-info">
                <HeaderContainer />
                <div className="profile-username">
                  {this.props.user.username}
                  <div className="follow">
                    <button onClick={this.toggleFollow} className="follow-button" >{this.followButton()}</button>
                  </div>
                </div>
                <div className="profile-details">
                  <label className="details">{numPosts} posts</label>
                  <label className="details-after">{numFollowers} followers</label>
                  <label className="details-after">{numFollowings} following</label>
                </div>
                <div className="profile-name">
                  {this.props.user.name}
                </div>
              </div>
              <div className="user-pics">
                {this.userPictures()}
              </div>
            </div>
          );
        } else {
          return(
            <div>

            </div>
          );
        }
      }
    } else {
      return(
        <div>

        </div>
      );
    }
  }
}

export default withRouter(Profile);
