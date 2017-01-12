import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="posts">
          <Header logout={this.props.logout}/>
          <ul className="placeholder">
            HI FROM THE INDEX PAGE!
            <input type="submit" value="Post Image" />
          </ul>
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

export default withRouter(HomePage);
