class DataImport

  def process(items)
    @items = items.map do |item|
      create_radio(item)
    end
    identify_partnerships
    identify_networks
    identify_totals
  end

  def create_radio(row)
    item = {:station => Radio.create!(:name => row[0], :fee => row[1], :category => row[2], :note => row[7])}
    item[:partner] = row[3]
    item[:partner_fee] = row[6]
    item[:network] = row[4]
    item[:total] = row[5]
    item
  end

  def identify_partnerships
    items = @items.find_all {|item| !item[:partner].nil? && !item[:partner_fee].nil?}
    items.each do |item|
      station = item[:station]
      partner = Radio.find_by_name(item[:partner])
      next if partner.nil? or !partner.partnership.nil?
      fee = item[:partner_fee]
      next if fee.nil? || fee == 0
      partnership = Partnership.create(:fee => fee)
      station.partnership = partnership
      partner.partnership = partnership
      station.save!
      partner.save!
    end
  end

  def identify_networks
    items = @items.find_all {|item| !item[:network].blank?}
    items.each do |item|
      network = Network.find_by_name(item[:network])
      raise "The network #{item[:network]} is invalid!" if network.nil?
      network.radios << item[:station]
      network.save!
    end
  end

  def identify_totals
    items = @items.find_all {|item| !item[:total].blank?}
    items.each do |item|
      total = Total.find_by_name(item[:total])
      raise "The total #{item[:total]} is invalid!" if total.nil?
      total.radios << item[:station]
      total.save!
    end
  end

end