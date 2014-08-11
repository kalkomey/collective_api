class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string  :name
      t.string  :description
      t.integer :category_id
      t.timestamps
    end
    add_index :groups, :category_id
  end
end
