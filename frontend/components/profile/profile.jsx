import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.userPictures = this.userPictures.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.userId);
    this.props.fetchAllPosts();
  }

  userPictures() {
    if (this.props.user.id) {
      return(
          <ul className="user-pics">
            {this.props.user.posts.map(post => (
              <li key={post.id}>
                  <img src={post.img_url} />
              </li>
            ))}
        </ul>
      );
    }
  }

  render() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.params.userId) {
        return(
          <div className="profile-page">
            <div className="prof-info">
              <Header logout={this.props.logout}/>
              <div className="profile-username">
                {this.props.currentUser.username}
              </div>
              <div className="profile-details">
                <label className="details"># of posts</label>
                <label className="details-after"># of followers</label>
                <label className="details-after"># of following</label>
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
        return(
          <div className = "profile-page">
            <div className="prof-info">
              <Header logout={this.props.logout}/>
              <div className="profile-username">
                {this.props.user.username}
              </div>
              <div className="profile-details">
                <label className="details"># of posts</label>
                <label className="details-after"># of followers</label>
                <label className="details-after"># of following</label>
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
