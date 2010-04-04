class Radio < ActiveRecord::Base
  validates_presence_of :name, :fee, :category
  belongs_to :network
  belongs_to :total
  belongs_to :partnership

  cattr_reader :per_page
  @@per_page = 20

  def calculate_fee(stations)
    if partnership
      partners = partnership.radios
      all_partners_present =  partners.all? {|partner| stations.include? partner.id }
      all_partners_present ? partnership.fee / partnership.radios.size  : fee
    else
      fee
    end
  end

  def to_hash
    {:fee => fee, :name => name, :id => id, :type => 'station', :note => note}
  end

end