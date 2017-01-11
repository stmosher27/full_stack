import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  // username: session.currentUser.username,
  // email: session.currentUser.email,
  // name: session.currentUser.name,
  // errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
