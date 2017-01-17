import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomePageContainer from './home/home_page_container';
import ProfileContainer from './profile/profile_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  const _redirectHome = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    } else {
      replace('/login');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SessionFormContainer}
                 onEnter={_redirectHome}/>
          <Route path="/login" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn} />
          <Route path="/home" component={HomePageContainer}
                 onEnter={_ensureLoggedIn} />
          <Route path="/user/:userId" component={ProfileContainer}
                 onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
