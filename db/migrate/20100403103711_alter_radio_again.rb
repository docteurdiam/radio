class AlterRadioAgain < ActiveRecord::Migration
  def self.up
    add_column :radios, :partnership_id, :integer
    remove_column :radios, :partner_id
  end

  def self.down
    remove_column :radios, :partnership_id
    add_column :radios, :partner_id, :integer
  end
end
