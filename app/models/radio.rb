class Radio < ActiveRecord::Base
  validates_presence_of :name, :fee, :category
  belongs_to :network
  belongs_to :total
  belongs_to :partnership

  cattr_reader :per_page
  @@per_page = 20

  def to_hash
    base = {:fee => fee, :name => name, :id => id, :type => 'station', :note => note}
    base[:bonded] = self.partnership.other(self).name if self.partnership
    base[:bonded_fee] = self.partnership.other(self).fee if self.partnership
    base
  end

  def self.search(criteria)
    query = Radio
    return query unless criteria
    query = query.where("fee = ?", criteria[:fee_eq]) unless criteria[:fee_eq].blank?
    query = query.where("name ilike ?", '%' + criteria[:name_like] + '%') unless criteria[:name_like].blank?
    query = query.where("category = ?", criteria[:category_eq]) unless criteria[:category_eq].blank?
    query = query.where("region ilike ?", '%' + criteria[:region] + '%') unless criteria[:region].blank?  
    return query
  end

  def partner_with(station, bundle_fee)
    partnership = Partnership.create!(:fee => bundle_fee)
    partnership.radios << self
    partnership.radios << station
    partnership.save!
  end

end
