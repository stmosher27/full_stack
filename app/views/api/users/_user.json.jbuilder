json.extract! user, :id, :username, :email, :name
json.posts user.posts
json.followers user.followers
json.followings user.followings

json.posts do
  json.array! user.posts.map do |post|
    json.description post.description
    json.likes post.likes
    json.user_id post.author_id
    json.comments post.comments
    json.img_url post.img_url
    json.published time_ago_in_words(post.created_at)
  end
end
