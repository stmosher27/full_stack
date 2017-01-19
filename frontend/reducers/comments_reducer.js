import { CREATE_COMMENT, RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

import merge from 'lodash/merge';

const CommentsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case CREATE_COMMENT:
      return action.comment;
    case DELETE_COMMENT:
      let newState = state.slice();
      delete action.commentId;
      return newState;
    case RECEIVE_COMMENT:
      let newState = state.slice();
      newState.push(action.comment);
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
