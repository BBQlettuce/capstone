class RemoveResumeFromUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :resume_text
  end
end
