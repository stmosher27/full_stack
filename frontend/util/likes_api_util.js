export const createLike = postId => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: {post: postId}
  })
);

export const deleteLike = postId => (
  $.ajax({
    method: 'DELETE',
    url: `api/like/${postId}`,
  })
);
