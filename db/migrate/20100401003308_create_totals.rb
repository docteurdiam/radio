class CreateTotals < ActiveRecord::Migration
  def self.up
  create_table :totals do |t|
     t.string :name
   end
  end

  def self.down
    drop_table :totals
  end
end
