class Total < ActiveRecord::Base
  validates_presence_of :name
  has_many :radios

  cattr_reader :per_page
  @@per_page = 20

  def to_hash
    {:name => name, :id => id, :type => 'total', :note => note}
  end

  def basic_fee
    radios.inject(0) {|sum, x| sum + x.fee }
  end

  def effective_fee
    fee ? fee : basic_fee
  end

end