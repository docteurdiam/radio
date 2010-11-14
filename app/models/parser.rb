class Parser

  def parse(upload)
    header = true
    items = []
    CSV.foreach(upload) do |row|
      if header then
        header = false
        next
      end
      items << row
    end
    Rails.logger.debug "#{items.size} rows were parsed"
    items
  end

end