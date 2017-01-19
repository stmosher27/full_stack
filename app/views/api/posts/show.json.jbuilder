json.extract! @post, :id, :description, :img_url, :author_id, :likes, :comments
if (@comment)
  json.extract! @comment, :id, :user_id, :body, :post_id
  json.username @comment.author.username
end
