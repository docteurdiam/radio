class Total < ActiveRecord::Base
  validates_presence_of :name
  has_many :radios
end