class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.text :description
      t.integer :user_id
      t.integer :card_id

      t.index [:user_id, :card_id]

      t.timestamps null: false
    end
  end
end
