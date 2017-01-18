import React from 'react';
import { Link, withRouter } from 'react-router';
import ImageForm from '../home/image_form';
import Modal from 'react-modal';

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div className='new-post-form'>
        <Modal
          contentLabel=''
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <div className='modal-top'>
            <form onSubmit={this.handleSubmit} >
              <input type="text"
                onChange={this.update('description')}
                placeholder='description' />
              <ImageForm />
              <input type="submit" className="new-post-button" value="Create Post" />
            </form>
            <p><button onClick={this.closeModal}>close</button></p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewPostForm;
