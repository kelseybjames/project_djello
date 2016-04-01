class CreateBoardMemberships < ActiveRecord::Migration
  def change
    create_table :board_memberships do |t|
      t.integer :member_id
      t.integer :board_id

      t.index [:member_id, :board_id]

      t.timestamps null: false
    end
  end
end
