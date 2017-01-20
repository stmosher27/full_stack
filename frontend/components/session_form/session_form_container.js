import { connect } from 'react-redux';
import { login, logout,
  signup, clearErrors } from '../../actions/session_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  let formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
