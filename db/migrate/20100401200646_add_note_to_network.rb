class AddNoteToNetwork < ActiveRecord::Migration
  def self.up
    add_column :networks, :note, :text
  end

  def self.down
    remove_column :networks, :note
  end
end
