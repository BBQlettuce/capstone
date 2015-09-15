class Job < ActiveRecord::Base
  validates :title, :description, :hoomin_id, presence: true

  belongs_to :hoomin
end
