class FeeCalculator

  def calculate(station_identifiers)

    if station_identifiers.nil? or station_identifiers.size == 0
      return Worksheet.new []
    else
      worksheet = Worksheet.new(Radio.find station_identifiers.uniq, :include => :network)
    end

    worksheet.total_without_discounts = Price.sum(worksheet.remaining)

		puts worksheet.total_without_discounts

    Price.split_frequency(worksheet)
          
    Price.totals(worksheet)

    Price.partnerships(worksheet)

    worksheet.total = worksheet.total + Price.sum(worksheet.remaining)

    worksheet

  end

end
