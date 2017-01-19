import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { commentPost } from '../../actions/comment_actions';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (store, ownProps) => ({
  comments: ownProps.post.comments,
  errors: store.errors
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(commentPost(comment)),
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
