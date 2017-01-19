export const createSearch = search => (
  $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: {search}
  })
);
