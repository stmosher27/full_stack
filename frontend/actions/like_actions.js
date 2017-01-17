import * as APIUtil from '../util/likes_api_util';

export const CREATE_LIKE = 'CREATE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveLike = like => ({
  type: CREATE_LIKE,
  like
});

export const deleteLike = postId => ({
  type: DELETE_LIKE,
  post_id: postId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const like = postId => dispatch => (
  APIUtil.createLike(postId).then(
    newLike => dispatch(receiveLike(newLike))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const unlike = postId => dispatch => (
  APIUtil.deleteLike(postId).then(
    postUnlike => dispatch(deleteLike(postUnlike))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
