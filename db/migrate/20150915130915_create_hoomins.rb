class CreateHoomins < ActiveRecord::Migration
  def change
    create_table :hoomins do |t|
      t.email :string, null: false
      t.name :string, null: false
      t.password_digest :string, null: false
      t.session_token :string, null: false
      
      t.timestamps null: false
    end
  end
end
