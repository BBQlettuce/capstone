class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.hoomin_id :integer, null: false
      t.title :string, null: false
      t.description :string, null: false
      t.expire_date :date
      t.salary :float
      t.url :string

      t.timestamps null: false
    end
  end
end
