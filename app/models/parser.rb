class Parser

  def parse(upload)
    upload.rewind
    header = true
    items = []
    CSV::Reader.parse(upload) do |row|
      if header then
        header = false
        next
      end
      items << {:name => row[0],
                :fee => row[1],
                :category => row[2],
                :partner => row[3],
                :network => row[4],
                :total => row[5],
                :partner_fee => row[6],
                :note => row[7]}
    end
  end

end