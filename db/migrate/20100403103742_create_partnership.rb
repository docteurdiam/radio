class CreatePartnership < ActiveRecord::Migration
  def self.up
   create_table :partnerships do |t|
     t.integer :station_id
     t.integer :partner_id
     t.integer :fee
   end
  end

  def self.down
    drop_table :partnerships
  end
end
