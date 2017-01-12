class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :img_url, null: false
      t.string :description, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
  end
end
