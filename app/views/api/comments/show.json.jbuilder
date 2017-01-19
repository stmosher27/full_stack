json.extract! @comment, :id, :post_id, :user_id, :body
json.username @comment.author.username
