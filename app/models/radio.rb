class Radio < ActiveRecord::Base
  validates_presence_of :name, :fee, :category
  belongs_to :network
  belongs_to :total
  belongs_to :partnership

  cattr_reader :per_page
  @@per_page = 20

  def to_hash
    {:fee => fee, :name => name, :id => id, :type => 'station', :note => note}
  end

  def partner_with(station, bundle_fee)
    partnership = Partnership.create!(:fee => bundle_fee)
    partnership.radios << self
    partnership.radios << station
    partnership.save!
  end

end