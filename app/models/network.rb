class Network < ActiveRecord::Base
  validates_presence_of :name, :fee
  has_many :radios
end