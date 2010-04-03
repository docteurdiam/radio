class Partnership < ActiveRecord::Base
  validates_presence_of :station, :partner, :fee
  belongs_to :station, :class_name => "Radio"
  belongs_to :partner, :class_name => "Radio"
end