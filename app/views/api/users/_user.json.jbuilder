json.extract! user, :id, :username, :email, :name
json.posts user.posts
json.followers user.followers
json.followings user.followings
