class User < ActiveRecord::Base
  validates :email, :password_digest, :name, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  # validates :uid, uniqueness: {scope: :provider}
  after_initialize :ensure_session_token

  has_many :posted_jobs, dependent: :destroy,
  class_name: "Job",
  foreign_key: :poster_id,
  primary_key: :id

  has_many :job_saves,
  class_name: "Jobsave",
  foreign_key: :user_id,
  primary_key: :id

  has_many :saved_jobs,
  through: :job_saves,
  source: :job

  has_one :resume, dependent: :destroy,
  class_name: "Resume",
  foreign_key: :user_id,
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
    user = self.find_by(email: email)
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

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid])

    unless user
      user = User.create!(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid],
            # email
            # name
            password: SecureRandom::urlsafe_base64)
    end

    user
  end

end
