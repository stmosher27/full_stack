json.array! @posts do |post|
  json.extract! post, :id, :description, :img_url, :author_id
  json.likes post.likes
  json.published time_ago_in_words(post.created_at)

end
