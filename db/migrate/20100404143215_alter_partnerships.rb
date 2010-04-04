class AlterPartnerships < ActiveRecord::Migration
  def self.up
     remove_column :partnerships, :partner_id
     remove_column :partnerships, :station_id
  end

  def self.down
    add_column :partnerships, :partner_id, :integer
    add_column :partnerships, :station_id, :integer
  end
end
