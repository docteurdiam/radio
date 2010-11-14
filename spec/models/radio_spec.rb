# encoding: UTF-8

require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe Radio do

  it "creates valid radios" do
    Factory.create(:valid_radio)
  end

end