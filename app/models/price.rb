class Price

  def self.split_frequency(data)

    current = data.remaining.find_all {|station| station.network != nil}

    freq = Hash.new
    freq["ILR FM"] = current.find_all {|station| station.network.name == "ILR FM"}
    freq["ILR AM"] = current.find_all {|station| station.network.name == "ILR AM"}

    if sum(freq["ILR FM"]) > 1000 && Price.sum(freq["ILR AM"]) > 1000
      data.remaining = data.remaining - freq["ILR FM"] - freq["ILR AM"]
      data.messages << "The combined rate for stations in both ILR FM and ILR AM has exceeded £2000 so they are bundled at a rate of £1500"
      data.total = data.total + 1500
    elsif Price.sum(freq["ILR FM"]) > 1000
      data.remaining = data.remaining - freq["ILR FM"]
      data.messages << "The combined rate for stations in ILR FM has exceeded £1000 so they are bundled at a fee of £1000"
      data.total = data.total + 1000
    elsif Price.sum(freq["ILR AM"]) > 1000
      data.remaining = data.remaining - freq["ILR AM"]
      data.messages << "The combined rate for stations in ILR AM has exceeded £1000 so they are bundled at a fee of £1000"
      data.total = data.total + 1000
    end

  end

  def self.partnerships(data)

    current = data.remaining.find_all {|station| station.partnership}
    bundles = Hash.new


    current.each do |station|
      if current.reject{|x| x == station}.any? {|x| x.partnership == station.partnership}
        bundles[station.partnership] = [] unless bundles.key? station.partnership
        bundles[station.partnership] << station
        data.total = data.total + (station.partnership.fee / 2.0)
        data.remaining = data.remaining - station
      end
    end

    bundles.each do |key, value|
      data.messages << "#{value[0].name} and #{value[1].name} are bundled at a rate of £#{key.fee}"
    end

  end

  def self.totals(data)

    current = Hash.new

    data.remaining.each do |station|
      if station.total && station.total.fee
        current[station.total] = [] unless current.has_key? station.total
        current[station.total] << station
      end
    end

    current.each do |key, value|
      if key.fee < value.inject(0) {|sum, station| sum + station.fee} 
        data.remaining = data.remaining - value
        data.total = data.total + key.fee
        data.messages << "The #{key.name} group of stations are bundled at a rate of £#{key.fee}"
      end
    end

  end

  def self.sum(stations)
    return 0 if stations.nil? || stations.size == 0
    stations.inject(0) {|total, station| total + station.fee}
  end

end