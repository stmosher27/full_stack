import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { newPost } from '../../actions/post_actions';
import Header from './header';

const mapStateToProps = store => ({
  currentUser: store.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  newPost: post => dispatch(newPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
