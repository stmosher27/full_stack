import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.router.push('/login'));
  }

  render() {
    return(
      <div className='header'>
        <div className="header-details">
          <img className="logo" src="http://www.clker.com/cliparts/1/T/Y/s/X/a/black-and-white-camera-hi.png" alt="logo"/>
        </div>
        <div className="header-details">
          <label className="header-title">Trailgram</label>
        </div>
        <div className="header-details">
          <button onClick={this.handleSubmit}><img className="logout-pic" src="https://image.freepik.com/free-icon/door-exit_318-48444.jpg" alt="logout"/></button>
        </div>

      </div>
    );
  }
}

export default withRouter(Header);
