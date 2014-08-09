class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :employee_id
      t.integer :group_id
      t.boolean :coordinator, default: false
    end

    add_index :memberships, :employee_id
    add_index :memberships, :group_id
  end
end
