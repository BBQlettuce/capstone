class CreateResumes < ActiveRecord::Migration
  def change
    create_table :resumes do |t|
      t.integer :doge_id, null: false
      t.text :text, null: false

      t.timestamps null: false
    end

    add_index :resumes, :doge_id
    add_index :jobs, :hoomin_id
  end
end
