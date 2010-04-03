class Radio < ActiveRecord::Base
  validates_presence_of :name, :fee, :category
  belongs_to :network
  belongs_to :total
  has_one :partnership

  cattr_reader :per_page
  @@per_page = 20

  def to_hash
    {:fee => fee, :name => name, :id => id, :type => 'station', :note => note}
  end


end