# encoding: UTF-8

require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe Partnership do

  it "creates a valid partnership" do
    Factory.create(:valid_partnership)
  end

end