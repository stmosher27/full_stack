class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :username, length: { minimum: 3 }
  validates :password, length: { minimum: 6 }, allow_nil: :true

  has_many :posts,
    class_name: "Post",
    foreign_key: :author_id

  has_many :likes

  has_many :liked_posts,
	  through: :likes,
	  source: :post

  has_many :comments,
    class_name: "Comment",
    foreign_key: :user_id


  after_initialize :ensure_session_token

  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
