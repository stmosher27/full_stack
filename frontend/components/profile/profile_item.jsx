import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import Modal from 'react-modal';

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
    return(
      <div>
        <img className='to-modal' onClick={this.openModal} src={this.props.post.img_url} />

        <Modal
          contentLabel=''
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <div className='modal-top'>
            <p><img src={this.props.post.img_url} /></p>
            <p><button onClick={this.closeModal}>close</button></p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProfileItem;
