class AddIndexes < ActiveRecord::Migration
  def self.up
    add_index "radios", ["partnership_id"], :name => "index_radios_on_partnership_id"
    add_index "radios", ["category"], :name => "index_radios_on_category"
    add_index "radios", ["total_id"], :name => "index_radios_on_total_id"
    add_index "radios", ["network_id"], :name => "index_radios_on_network_id"
    add_index "radios", ["name"], :name => "index_radios_on_name"
  end

  def self.down
    remove_index "radios", :name => "index_radios_on_partnership_id"
    remove_index "radios", :name => "index_radios_on_category"
    remove_index "radios", :name => "index_radios_on_total_id"
    remove_index "radios", :name => "index_radios_on_network_id"
    remove_index "radios", :name => "index_radios_on_name"
  end
end
