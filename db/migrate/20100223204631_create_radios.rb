class CreateRadios < ActiveRecord::Migration
  def self.up
   create_table :radios do |t|
     t.string :name
     t.string :category
     t.integer :fee
   end
  end

  def self.down
    drop_table :radios
  end
end
