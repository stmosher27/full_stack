json.extract! @user, :id, :username, :email, :name
json.followings @user.followings
