import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/post_actions';
import NewPostForm from './new_post_form';

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  null,
  mapDispatchToProps
)(NewPostForm);
