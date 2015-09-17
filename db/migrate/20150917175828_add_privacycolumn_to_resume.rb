class AddPrivacycolumnToResume < ActiveRecord::Migration
  def change
    add_column :resumes, :private, :boolean, default: false, null: false
  end
end
