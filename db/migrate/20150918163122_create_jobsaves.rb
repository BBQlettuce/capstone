class CreateJobsaves < ActiveRecord::Migration
  def change
    create_table :jobsaves do |t|
      t.integer :user_id, null: false
      t.integer :job_id, null: false

      t.timestamps null: false
    end

    add_index :jobsaves, :user_id
    add_index :jobsaves, :job_id
  end
end
