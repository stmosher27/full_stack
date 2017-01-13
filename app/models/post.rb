class Post < ActiveRecord::Base
  validates :img_url, :description, :author, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  has_many :likes

  has_many :liked_posts,
    through: :likes,
    source: :user

  has_many :comments,
    class_name: "Comment",
    foreign_key: :post_id

end
