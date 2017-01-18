import * as APIUtil from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CREATE_POST = 'CREATE_POST';

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const newPost = post => dispatch => (
  APIUtil.createPost(post).then(
    createdPost => dispatch(receivePost(createdPost))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId).then(
    post => dispatch(receivePost(post))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchAllPosts = () => dispatch => (
  APIUtil.fetchAllPosts().then(
    posts => dispatch(receiveAllPosts(posts))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
