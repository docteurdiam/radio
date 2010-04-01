class AlterRadios < ActiveRecord::Migration
  def self.up
    add_column :radios, :partner_id, :integer
    add_column :radios, :info, :text
    add_column :radios, :total_id, :integer
    add_column :radios, :network_id, :integer
  end

  def self.down
    remove_column :radios, :info
    remove_column :radios, :partner_id
    remove_column :radios, :total_id
    remove_column :radios, :network_id
  end
end
