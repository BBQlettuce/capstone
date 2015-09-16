class Resume < ActiveRecord::Base
  validates :hoomin_id, :text, presence: true

  belongs_to :doge,
  class_name: "User",
  foreign_key: :doge_id,
  primary_key: :id
end
