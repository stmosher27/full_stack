import React from 'react';
import { withRouter } from 'react-router';
import NewPostFormContainer from './new_post_form_container';
import Modal from 'react-modal';
import ImageForm from '../home/image_form';
import ModalStyle from './modal_style';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewProfile = this.viewProfile.bind(this);
    this.viewHome = this.viewHome.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.processImage = this.processImage.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.showSearchResults = this.showSearchResults.bind(this);
    this.goToSearchProfile = this.goToSearchProfile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.upadate = this.update.bind(this);
    this.state = { modalOpen: false, img: null, search: ''};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  goToSearchProfile(id) {
    return (e) => {
      this.props.router.push(`/user/${id}`);
    };
  }

  updateSearch(e) {
      this.setState({
        search: e.target.value
      }, () => {
        if (this.state.search.length > 0) {
          this.props.newSearch(this.state.search)
            .then(response => console.log(response));
        } else {
          this.props.clearSearch();
        }
      }
    );
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
    const that = this;
    const post = {
      author_id: this.props.currentUser.id,
      img_url: this.state.img[0].secure_url,
      description: this.state.description
    };
    this.props.newPost(post).then(

      () => {debugger; that.props.fetchAllPosts()}
    );
    this.closeModal();
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  showSearchResults() {

    if (this.props.searchResults.length > 0) {
      return (
        <ul  className='search-bar-results'>
          {this.props.searchResults.map( user => (
            <li key={'search_results' + user.id} className='search-result' onClick={this.goToSearchProfile(user.id)}>
              <h5 className='search-profile-username'>{user.username}</h5>
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return(
      <div className='header' onClick={this.props.clearSearch}>
        <div className="header-details">
          <img className="logo" src="http://res.cloudinary.com/dvm0l8rce/image/upload/v1484869857/green-camera-for-photography-logo-clip-art_lfwgsb.png" alt="logo"/>
        </div>
        <div className="header-details">
          <label onClick={this.viewHome} className="header-title">Trailgram</label>
        </div>
        <section className='search-bar'>
          <div className='search-logo'>🔎</div>
          <section className='search-icon-container'>
            <input type='text' value={this.state.search} placeholder='Search User' onChange={this.updateSearch}></input>
          </section>
          {this.showSearchResults()}
        </section>
        <div className="click-button">
          <div className="header-details">
            <a id="profile" onClick={this.viewProfile}><img className="profile-pic" src="http://res.cloudinary.com/dvm0l8rce/image/upload/v1484865639/user_male_circle_filled1600_d0ruse.png" alt="profile" /></a>
          </div>
          <div className="header-details">
            <img className="upload-pic" onClick={this.openModal} src="http://res.cloudinary.com/dvm0l8rce/image/upload/v1484865670/upload-file-ios-7-interface-symbol_318-33627_sy3dlm.jpg" alt="upload" />
            <Modal
              contentLabel=''
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={ModalStyle}>

              <div className='modal-top'>
                <h2 className="modal-title">New Post</h2>
                <form onSubmit={this.handleForm} >
                  <ImageForm processImage={this.processImage}/>
                  <textarea className="modal-description"
                    required
                    onChange={this.update('description')}
                    placeholder='Description' />
                  <div className="new-post-create">
                    <input type="submit" className="new-post-button" value="Create Post" />
                  </div>
                </form>
              </div>
            </Modal>
          </div>
          <div className="header-details">
            <a id="logout" onClick={this.handleSubmit}><img className="logout-pic" src="http://res.cloudinary.com/dvm0l8rce/image/upload/v1484865694/32567_oeozwm.png" alt="logout"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
