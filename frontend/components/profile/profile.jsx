import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.userPictures = this.userPictures.bind(this);
    this.selectPosts = this.selectPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPosts();
  }

  selectPosts(post) {
    if (post.author_id === this.props.currentUser.id) {
      return(
        <ul>
          <li>
            <img src={post.img_url} />
          </li>
        </ul>
      );
    }
  }

  userPictures() {
    return(
      <div className="user-pics">
        {this.props.posts.reverse().map(post => (
          <div key={post.id}>
            {this.selectPosts(post)}
          </div>
        ))}
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="profile-page">
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
}

export default withRouter(Profile);
