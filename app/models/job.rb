class Job < ActiveRecord::Base
  validates :title, :description, :user_id, presence: true
  validates :salary, numericality: true, allow_nil: true

  belongs_to :user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id
end
