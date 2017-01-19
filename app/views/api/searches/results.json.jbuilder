json.searchResults do
  if @users.length > 0
    json.array! @users.order('username ASC'), :username, :id
  else
    json.array! @users, :username, :id
  end
end
