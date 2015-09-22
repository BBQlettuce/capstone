class Jobtagging < ActiveRecord::Base
  validates :job_id, :tag_id, :presence: true
  validates :job_id, uniqueness: {scope: :tag_id}

  belongs_to :job
  belongs_to :tag
end
