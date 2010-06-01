class Network < ActiveRecord::Base
  validates_presence_of :name
  has_many :radios

  def to_hash
    {:fee => fee, :name => name, :id => id, :type => 'network', :note => note}
  end

end