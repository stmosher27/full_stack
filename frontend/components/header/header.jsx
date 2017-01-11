import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
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
        <div>

        </div>

      </div>
    );
  }
}

export default withRouter(Header);
