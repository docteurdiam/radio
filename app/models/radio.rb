class Radio < ActiveRecord::Base
  validates_presence_of :name, :fee, :category
  belongs_to :network
  has_one :radio
  belongs_to :total

  cattr_reader :per_page
  @@per_page = 20 

end