class Partnership < ActiveRecord::Base
  validates_presence_of :fee
  has_many :radios
end