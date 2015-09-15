class Job < ActiveRecord::Base
  validates :title, :description, :hoomin_id, presence: true
  validates :salary, numericality: true, allow_nil: true

  belongs_to :hoomin,
  class_name: "User",
  foreign_key: :hoomin_id,
  primary_key: :id
end
