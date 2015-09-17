class ChangeAllToDoges < ActiveRecord::Migration
  def change
    remove_column :jobs, :hoomin_id
    add_column :jobs, :user_id, :integer, null: false
    add_index :jobs, :user_id

    remove_column :resumes, :doge_id
    add_column :resumes, :user_id, :integer, null: false
    add_index :resumes, :user_id
  end
end
