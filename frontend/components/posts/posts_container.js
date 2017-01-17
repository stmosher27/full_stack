
import { connect } from 'react-redux';
import Posts from './posts';
import { fetchAllPosts, fetchPost } from '../../actions/post_actions';
import { like, unlike } from '../../actions/like_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    like: (postId) => dispatch(like(postId)),
    unlike: (postId) => dispatch(unlike(postId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
