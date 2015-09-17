class Job < ActiveRecord::Base
  validates :title, :description, :user_id, presence: true
  validates :salary, numericality: true, allow_nil: true

  belongs_to :poster,
  class_name: "User",
  foreign_key: :poster_id,
  primary_key: :id
end
