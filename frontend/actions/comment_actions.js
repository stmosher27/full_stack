import * as APIUtil from '../util/comments_api_util';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  comment_id: commentId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchComment = id => dispatch => (
  APIUtil.fetchComment(id).then(
    comment => dispatch(receiveComment(comment))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const commentPost = comment => dispatch => (
  APIUtil.createComment(comment).then(
    newComment => dispatch(receiveComment(comment))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const uncomment = commentId => dispatch => (
  APIUtil.deleteComment(commentId).then(
    newCommentId => dispatch(deleteComment(newCommentId))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
