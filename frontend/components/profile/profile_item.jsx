import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import CommentItem from '../posts/comment_item';
import CommentFormContainer from '../posts/comment_form_container';

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
      const user_profile_url = `/user/${this.props.post.user_id}`;
      return(
      <div>
        <img className='to-modal' onClick={this.openModal} src={this.props.post.img_url} />

        <Modal
          contentLabel=''
          key={`${this.props.user.id}-${this.props.post.id}`}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>

          <div className='modal-top-profile'>
            <label className="profile-post-label">
              <Link className="profile-profile-link" to={user_profile_url} >{this.props.user}</Link>
              <div className="profile-posted-at">
                {this.props.post.published}
              </div>
            </label>
            <p><img className="profile-pictures" src={this.props.post.img_url} /></p>
            <div className="profile-likes">
              <h4 className="like-nums">{this.props.post.likes.length}</h4>
              <h4 className="likes-word">Likes</h4>
            </div>
            <div className="profile-post-desc">
              <Link className="profile-description-link" to={user_profile_url} >{this.props.user}</Link>
              <h3 className="profile-description-post">{this.props.post.description}</h3>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProfileItem;
