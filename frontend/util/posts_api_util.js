export const fetchAllPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
);

export const fetchPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
);
