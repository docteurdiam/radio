class AddNoteToRadios < ActiveRecord::Migration
  def self.up
    add_column :radios, :note, :text
  end

  def self.down
    remove_column :radios, :note
  end
end
