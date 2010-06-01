require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe DataImport do


  before(:each) do
    Radio.delete_all
    Partnership.delete_all
    Total.delete_all
    Network.delete_all
    @items = [["radio 1", 40, "Local & Regional", "", "", "", "", "a"], ["radio 2", 70, "National and News", "", "", "", "", "b"]]
  end

  it "creates a station for every item provided" do
    Radio.should_receive(:create!).with({:name => "radio 1", :fee => 40, :category =>  "Local & Regional", :note => "a"})
    Radio.should_receive(:create!).with(:name => "radio 2", :fee => 70, :category => "National and News", :note => "b")
    DataImport.new.process(@items)
  end

  describe "when a station is in a partnership" do

    describe "and the partnership has no fee defined" do

      it "does not create a partnership" do
        @items << ["radio 3", 40, "Local & Regional", "radio 5", "", "", "", ""]
        DataImport.new.process(@items)
        Partnership.count(:all).should equal(0)
      end

    end

    describe "and the partner station's name is not provided" do

      it "does not create a partnership" do
        @items << ["radio 3", 40, "Local & Regional", "", "", "", 25, ""]
        DataImport.new.process(@items)
        Partnership.count(:all).should equal(0)
      end

    end

    describe "and the partnership is fully defined" do

      before(:each) do
        @items << ["radio 3", 40, "Local & Regional", "radio 5", "", "", 25, ""]
      end

      describe "and a station's partner cannot be found" do

        it "does not create a partnership" do
          DataImport.new.process(@items)
          Partnership.count(:all).should equal(0)
        end

      end

      describe "and both sides of the partnership are fully defined" do

        it "creates a single partnership for both stations" do
          @items << ["radio 5", 70, "Local & Regional", "radio 3", "", "", 25, ""]
          DataImport.new.process(@items)
          Partnership.count(:all).should equal(1)
          Radio.find_by_name("radio 5").partnership.should_not be_nil
          Radio.find_by_name("radio 3").partnership.should_not be_nil
        end

      end

      describe "and one side of the partnership is missing" do

        it "creates a single partnership for both stations" do
          @items << ["radio 5", 70, "Local & Regional", "", "", "", "", ""]
          DataImport.new.process(@items)
          Partnership.count(:all).should equal(1)
          Radio.find_by_name("radio 5").partnership.should_not be_nil
          Radio.find_by_name("radio 3").partnership.should_not be_nil
        end

      end

    end

  end

  describe "when a station belongs to a total" do

    it "throws an error if the total does not exist" do
      @items << ["radio 5", 70, "Local & Regional", "", "", "Total Gold", "", ""]
      lambda {DataImport.new.process(@items)}.should raise_error
    end

    it "assigns the station to the total" do
      Total.create!(:name => "Total Gold")
      @items << ["radio 5", 70, "Local & Regional", "", "", "Total Gold", "", ""]
      DataImport.new.process(@items)
      Total.find_by_name("Total Gold").radios.size.should eql(1)
    end

  end

  describe "when a station belongs to a network" do

    it "throws an error if the network does not exist" do
      @items << ["radio 5", 70, "Local & Regional", "", "ILR FM", "", "", ""]
      lambda {DataImport.new.process(@items)}.should raise_error
    end

    it "assigns the station to the network" do
      Network.create!(:name => "ILR FM")
      @items << ["radio 5", 70, "Local & Regional", "", "ILR FM", "", "", ""]
      DataImport.new.process(@items)
      Network.find_by_name("ILR FM").radios.size.should eql(1)
    end

  end



end


