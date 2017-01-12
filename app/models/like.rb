class Like < ActiveRecord::Base
  validates :user_id, uniqueness: {scope: :post_id}

  belongs_to :post

  belongs_to :user
  
end
