class FeeCalculator

  def calculate(identifiers)
    @stations = identifiers.map do |identifier|
      Radio.find(identifier)
    end
    network_stations = @stations.find_all {|station| !station.network.nil?}
    independent_stations = @stations - network_stations
    sum(independent_stations) + process_networks(network_stations)
  end

  def is_partner_present(partnership)
    found = @stations.find_all {|station| station.partnership == partnership}
    found.size > 1
  end

  def process_networks(stations)
    return 0 if stations.nil? || stations.empty?
    networks = {"ILR FM" => [], "ILR AM" => []}
    stations.each do |station|
      networks[station.network.name] << station
    end
    if sum(networks["ILR FM"]) > 1000 && sum(networks["ILR AM"]) > 1000
      1500
    elsif sum(networks["ILR FM"]) > 1000
      1000 + sum(networks["ILR AM"])
    elsif  sum(networks["ILR AM"]) > 1000
      1000 + sum(networks["ILR FM"])
    end  
  end

  def sum(stations)
    total = 0
    stations.each do |station|
      if station.partnership && is_partner_present(station.partnership)
        total = total + station.partnership.fee
      else
        total = total + station.fee
      end
    end
    total
  end

end