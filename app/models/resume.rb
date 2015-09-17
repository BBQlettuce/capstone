class Resume < ActiveRecord::Base
  validates :user_id, :text, presence: true
  validates :private, inclusion: {in: [true, false]}

  belongs_to :user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id
end
