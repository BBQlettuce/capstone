class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.integer :hoomin_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.date :expire_date
      t.float :salary
      t.string :url
      
      t.timestamps null: false
    end
  end
end
