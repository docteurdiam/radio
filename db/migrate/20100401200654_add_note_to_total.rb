class AddNoteToTotal < ActiveRecord::Migration

  def self.up
    add_column :totals, :note, :text
  end

  def self.down
    remove_column :totals, :note
  end

end
