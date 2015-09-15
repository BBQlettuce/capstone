class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_hoomin, default: false, null: false
      t.text :resume_text

      t.timestamps null: false
    end
  end
end
