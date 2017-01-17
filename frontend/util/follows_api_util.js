export const createFollow = userId  => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {user_id: userId}
  })
);

export const deleteFollow = followId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followId}`
  })
);
