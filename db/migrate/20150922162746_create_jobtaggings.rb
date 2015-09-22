class CreateJobtaggings < ActiveRecord::Migration
  def change
    create_table :jobtaggings do |t|
      t.integer :job_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end

    add_index :jobtaggings, [:job_id, :tag_id], unique: true
  end
end
