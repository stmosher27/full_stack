import { connect } from 'react-redux';
import Posts from './posts';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllPosts: () => dispatch(fetchAllPosts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
