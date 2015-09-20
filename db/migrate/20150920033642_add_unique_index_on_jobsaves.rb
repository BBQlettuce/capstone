class AddUniqueIndexOnJobsaves < ActiveRecord::Migration
  def change
    add_index :jobsaves, [:user_id, :job_id], unique: true
  end
end
