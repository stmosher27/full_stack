import * as APIUtil from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = 'FETCH_ALL_POSTS';

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const fetchAllPosts = () => dispatch => (
  APIUtil.fetchAllPosts().then(
    posts => dispatch(receiveAllPosts(posts))
  )
);
