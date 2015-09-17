class RemoveIsHoomin < ActiveRecord::Migration
  def change
    remove_column :users, :is_hoomin
  end
end
