json.array! @posts do |post|
  json.extract! post, :id, :description, :img_url, :author_id
  json.likes post.likes
  json.username post.author.username

  json.comments do
    json.array! post.comments.map do |comment|
      json.username comment.author.username
      json.body comment.body
      json.user_id comment.user_id
      json.post_id comment.post_id
    end
  end
  json.published time_ago_in_words(post.created_at)

end
