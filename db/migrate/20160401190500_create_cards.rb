class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title
      t.text :description
      t.integer :list_id

      t.index :list_id
      t.index :title

      t.timestamps null: false
    end
  end
end
