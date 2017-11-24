class CreateBoardShares < ActiveRecord::Migration[5.1]
  def change
    create_table :board_shares do |t|
      t.integer :board_id, null: false
      t.integer :contributer_id, null: false

      t.timestamps
    end
    add_index :board_shares, :board_id
    add_index :board_shares, :contributer_id
  end
end
