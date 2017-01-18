import React from 'react';
import { withRouter } from 'react-router';
import ImageForm from '../home/image_form';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewProfile = this.viewProfile.bind(this);
    this.viewHome = this.viewHome.bind(this);
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

  viewHome(e) {
    e.preventDefault();
    this.props.router.push('/home');
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
          <ImageForm />
        </div>
        <div className="header-details">
          <a id="logout" onClick={this.handleSubmit}><img className="logout-pic" src="http://imageog.flaticon.com/icons/png/512/32/32567.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="logout"/></a>
        </div>

      </div>
    );
  }
}

export default withRouter(Header);
