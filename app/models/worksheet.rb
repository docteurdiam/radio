class Worksheet

  attr_accessor :remaining, :messages, :total

  def initialize(stations)
    self.remaining = stations
    self.messages = []
    self.total = 0
  end

end
