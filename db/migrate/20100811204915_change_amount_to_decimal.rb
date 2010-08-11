class ChangeAmountToDecimal < ActiveRecord::Migration
  def self.up
     change_column :radios, :fee, :decimal 
  end

  def self.down
    change_column :radios, :fee, :integer
  end
end
