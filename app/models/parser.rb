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
    items
  end

end
