class Worksheet

  attr_accessor :remaining, :messages, :total, :total_without_discounts

  def initialize(stations)
    self.remaining = stations
    self.messages = []
    self.total = 0
    self.total_without_discounts = 0
  end

end
