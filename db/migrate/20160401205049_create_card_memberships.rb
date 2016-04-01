class CreateCardMemberships < ActiveRecord::Migration
  def change
    create_table :card_memberships do |t|
      t.integer :member_id
      t.integer :card_id

      t.index [:member_id, :card_id]

      t.timestamps null: false
    end
  end
end
