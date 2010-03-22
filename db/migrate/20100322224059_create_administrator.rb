class CreateAdministrator < ActiveRecord::Migration
  def self.up
    user = User.new(:login => "administrator", :password => "com99123", :password_confirmation => "com99123")
    user.save!
  end

  def self.down
    User.find_by_login("administrator").destroy
  end
end
