class ChangeAllFeesToDecimal < ActiveRecord::Migration
  def self.up
    change_column :networks, :fee, :decimal
    change_column :partnerships, :fee, :decimal
  end

  def self.down
    change_column :networks, :fee, :integer
    change_column :partnerships, :fee, :integer
  end
end
