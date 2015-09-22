class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true

  has_many :jobtaggings

  has_many :jobs,
  through: :jobtaggings,
  source: :job
end
