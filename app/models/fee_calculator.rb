class FeeCalculator

  def calculate(station_identifiers)

    return 0 if station_identifiers.nil? or station_identifiers.size == 0

    ids = station_identifiers.map {|id| id}.uniq

    worksheet = Worksheet.new Radio.find ids, :include => :network

    Price.split_frequency(worksheet)
          
    Price.totals(worksheet)

    Price.partnerships(worksheet)

    worksheet.total = worksheet.total + Price.sum(worksheet.remaining)

    worksheet

  end

end