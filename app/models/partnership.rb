class Partnership < ActiveRecord::Base
  validates_presence_of :fee
  has_many :radios

  def other(station)
    [self.radios - [station]][0][0]
  end

end