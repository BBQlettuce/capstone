class Hoomin < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}
  after_initialize: :ensure_session_token

  
end
