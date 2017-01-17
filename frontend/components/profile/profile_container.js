import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  user: state.user,
  posts: Object.keys(state.posts).map(id => state.posts[id])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
