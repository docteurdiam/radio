class FeeCalculator

  def calculate(ids)
    @stations = ids.map {|id| Radio.find(id)}
    network_stations, independents = split_stations(@stations)
    process_networks(network_stations) +  sum(independents)
  end

  def analyze(identifiers)
    messages = []
    @stations = identifiers.map {|identifier| Radio.find(identifier)}
    network_stations, independents = split_stations(@stations)
    messages = messages + analyse_networks(network_stations)
    messages = messages + analyze_stations(independents)
  end

  def analyze_stations(stations)
    partnerships = []
    stations.inject([]) do |result, station|
      if station.partnership && is_partner_present(station.partnership) && !partnerships.include?(station.partnership)
        result << "Both #{station.name} and #{find_partner(station).name} are packaged together at a rate of £#{station.partnership.fee}"
        partnerships << station.partnership
      end
      result
    end
  end

  def find_partner(original)
    @stations.find {|station| station.partnership == original.partnership && station != original}
  end

  def analyse_networks(stations)
    return [] if stations.nil? || stations.empty?
    networks = {"ILR FM" => [], "ILR AM" => []}
    stations.each {|station| networks[station.network.name] << station}

    if sum(networks["ILR FM"]) > 1000 && sum(networks["ILR AM"]) > 1000
      ["The total rate for stations in both ILR FM and ILR AM has exceeded £2000 so they are packaged at a rate of £1500"]
    elsif sum(networks["ILR FM"]) > 1000
       ["The total rate for stations in ILR FM has exceeded £1000 so they are packaged at a rate of £1000"]
    elsif  sum(networks["ILR AM"]) > 1000
       ["The total rate for stations in ILR AM has exceeded £1000 so they are packaged at a rate of £1000"]
    else
      analyze_stations(networks["ILR AM"]) + analyze_stations(networks["ILR FM"])
    end
  end

  def split_stations(stations)
    network_stations = stations.find_all {|station| !station.network.nil?}
    return network_stations, stations - network_stations
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
    else
      sum(networks["ILR AM"]) + sum(networks["ILR FM"])
    end  
  end

  def sum(stations)
    total = 0
    stations.each do |station|
      additional_fee = 0
      if station.partnership && is_partner_present(station.partnership)
        additional_fee = station.partnership.fee / 2.0
      else
        additional_fee = station.fee
      end
      puts "Adding #{additional_fee} for #{station.name}"
      total = total + additional_fee
    end
    total
  end

end