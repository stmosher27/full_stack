import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
