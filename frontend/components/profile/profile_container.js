import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  posts: Object.keys(state.posts).map(id => state.posts[id])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
