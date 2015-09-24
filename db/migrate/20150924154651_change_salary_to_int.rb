class ChangeSalaryToInt < ActiveRecord::Migration
  def change
    change_column :jobs, :salary, :integer
  end
end
