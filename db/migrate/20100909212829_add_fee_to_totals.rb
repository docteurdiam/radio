class AddFeeToTotals < ActiveRecord::Migration

  def self.up
    add_column :totals, :fee, :decimal
  end

  def self.down
    remove_column :totals, :fee
  end

end
