import { RECEIVE_ALL_POSTS, RECEIVE_POST, CREATE_POST } from '../actions/post_actions';

import merge from 'lodash/merge';

const PostsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      let newState = state.slice();
      newState.push(action.post);
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
