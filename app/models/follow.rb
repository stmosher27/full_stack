class Follow < ActiveRecord::Base
  validates :followed_id, uniqueness: {scope: :follower_id}

  belongs_to :user_followed,
    class_name: "User",
    foreign_key: :followed_id

  belongs_to :user_following,
    class_name: "User",
    foreign_key: :follower_id
    
end
