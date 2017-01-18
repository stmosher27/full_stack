import React from 'react';
import { withRouter } from 'react-router';
import NewPostForm from './new_post_form';
import Modal from 'react-modal';
import ImageForm from '../home/image_form';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewProfile = this.viewProfile.bind(this);
    this.viewHome = this.viewHome.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.processImage = this.processImage.bind(this);
    this.upadate = this.update.bind(this);
    this.state = { modalOpen: false, img: null };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.router.push('/login'));
  }

  viewProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.currentUser.id}`);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  viewHome(e) {
    e.preventDefault();
    this.props.router.push('/home');
  }

  processImage(results){
    this.setState({img: results});
  }


  handleForm(e) {
    e.preventDefault();
    const post = {
      author_id: this.props.currentUser.id,
      img_url: this.state.img[0].secure_url,
      description: this.state.description
    };
    this.props.newPost(post);
    this.closeModal();
  }

  render() {
    return(
      <div className='header'>
        <div className="header-details">
          <img className="logo" src="http://www.clker.com/cliparts/1/T/Y/s/X/a/black-and-white-camera-hi.png" alt="logo"/>
        </div>
        <div className="header-details">
          <label onClick={this.viewHome} className="header-title">Trailgram</label>
        </div>
        <div className="header-details">
          <a id="profile" onClick={this.viewProfile}><img className="profile-pic" src="https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png" alt="profile" /></a>
        </div>
        <div className="header-details">
          <img className="upload-pic" onClick={this.openModal} src="https://image.freepik.com/free-icon/upload-file-ios-7-interface-symbol_318-33627.jpg" alt="upload" />
          <Modal
            contentLabel=''
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>

            <div className='modal-top'>
              <form onSubmit={this.handleForm} >
                <input type="text"
                  onChange={this.update('description')}
                  placeholder='description' />
                <ImageForm processImage={this.processImage}/>
                <input type="submit" className="new-post-button" value="Create Post" />
              </form>
              <p><button onClick={this.closeModal}>close</button></p>
            </div>
          </Modal>
        </div>
        <div className="header-details">
          <a id="logout" onClick={this.handleForm}><img className="logout-pic" src="http://imageog.flaticon.com/icons/png/512/32/32567.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="logout"/></a>

        </div>

      </div>
    );
  }
}

export default withRouter(Header);
