import { connect } from 'react-redux';
import Comments from './comments';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: Object.keys(state.comments).map(id => state.comments[id]),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
