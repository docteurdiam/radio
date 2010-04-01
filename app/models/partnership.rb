class Partnership < ActiveRecord::Base
  has_one :left
  has_one :right
  validates_presence_of :fee

end