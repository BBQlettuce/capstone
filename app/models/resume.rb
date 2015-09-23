class Resume < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_resumes_by_all,
    against: [:text],
    associated_against: {user: :name},
    using: {tsearch: {prefix: true}}

  validates :user_id, :text, presence: true
  validates :private, inclusion: {in: [true, false]}

  belongs_to :user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  # change this to use file lines later
  def text_snippet
    if text.length <= 160
      return text
    else
      return text.slice(0, 160) + "..."
    end
  end
end
