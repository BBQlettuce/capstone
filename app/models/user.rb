class User < ActiveRecord::Base
  validates :email, :password_digest, :name, :session_token, :is_hoomin, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  has_many :jobs,
  class_name: "Job",
  foreign_key: :hoomin_id,
  primary_key: :id

  has_one :resume,
  class_name: "Resume",
  foreign_key: :doge_id,
  primary_key: :id

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = self.class.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64
    until User.find_by(session_token: token).nil?
      token = SecureRandom.urlsafe_base64
    end
    token
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
