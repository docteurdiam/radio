class DataImport

  def process(rows)
    @ic = Iconv.new("utf-8", "iso-8859-1")
    @items = rows.map do |row|
      create_radio(row)
    end.find_all {|station| !station.nil?}
    Rails.logger.info "#{@items.size} stations have been saved to the database"
    identify_partnerships
    identify_networks
    identify_totals
  end

  def create_radio(row)
    unless row[0].blank? || row[1].blank? || row[2].blank?
      name = @ic.iconv(row[0].strip.gsub("'", "''"))
      item = {:station => Radio.create!(:name => name, :fee => row[1], :category => row[2], :note => row[7])}
      item[:partner] = row[3].nil? ? "" : @ic.iconv(row[3].strip.gsub("'", "''"))
      item[:partner_fee] = row[6]
      item[:network] = row[4]
      item[:total] = row[5]
      item
    else
      Rails.logger.info "Could not read station data"
    end
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
    networks = items.map{|item| item[:network]}.uniq
    networks.each do |network|
      Network.create(:name => network, :fee => 0)     
    end
    items.each do |item|
      network = Network.find_by_name(item[:network])
      raise "The network #{item[:network]} is invalid!" if network.nil?
      network.radios << item[:station]
      network.save!
    end
  end

  def identify_totals
    items = @items.find_all {|item| !item[:total].blank?}
    totals = items.map{|item| item[:total]}.uniq
    totals.each do |total|
      Total.create(:name => total)
    end
    items.each do |item|
      total = Total.find_by_name(item[:total])
      raise "The total #{item[:total]} is invalid!" if total.nil?
      total.radios << item[:station]
      total.save!
    end
  end

end