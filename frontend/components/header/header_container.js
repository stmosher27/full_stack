import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { newPost } from '../../actions/post_actions';
import { newSearch, clearSearch } from '../../actions/search_actions';
import { clearErrors } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = store => ({
  currentUser: store.session.currentUser,
  searchResults: store.searchResults
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  newPost: post => dispatch(newPost(post)),
  newSearch: search => dispatch(newSearch(search)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
