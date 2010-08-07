class FeeCalculator

  def calculate(identifiers)
    @stations = identifiers.map do |identifier|
      Radio.find(identifier)
    end

    network_stations = @stations.find_all {|station| !station.network.nil?}
    puts "#{network_stations.size} selected stations belong to a network"

    independent_stations = @stations - network_stations
    puts "#{independent_stations.size} selected stations are independent"

    independent_total =  sum(independent_stations)
    puts "The toal for independent stations is #{independent_total}"

    network_total =  sum(network_stations)
    puts "The toal for network stations is #{network_total}"

    network_total + independent_total
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
      sum(networks["ILR FM"]) + sum(networks["ILR FM"])
    end  
  end

  def sum(stations)
    total = 0
    stations.each do |station|
      additional_fee = 0
      if station.partnership && is_partner_present(station.partnership)
        additional_fee = station.partnership.fee / 2
      else
        additional_fee = station.fee
      end
      puts "Adding #{additional_fee} for #{station.name}"
      total = total + additional_fee
    end
    total
  end

end