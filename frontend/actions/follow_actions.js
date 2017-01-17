import * as APIUtil from '../util/follows_api_util';

export const CREATE_FOLLOW = 'CREATE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveFollow = follow => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = followId => ({
  type: DELETE_FOLLOW,
  follow_id: followId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const follow = userId => dispatch => (
  APIUtil.createFollow(userId).then(
    newFollow => dispatch(receiveFollow(newFollow))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const unfollow = followId => dispatch => (
  APIUtil.deleteFollow(followId).then(
    userUnfollow => dispatch(deleteFollow(userUnfollow))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
