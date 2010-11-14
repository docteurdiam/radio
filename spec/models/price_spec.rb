# encoding: UTF-8

require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe Price do

  describe "when pricing without any discounts" do

    it "sums the fees of each station" do
      Price.sum([Factory(:valid_radio, :fee => 20), Factory(:valid_radio, :fee => 30)]).should == 50
    end

    it "sums to 0 if the working set is empty" do
      Price.sum([]).should == 0
    end

    it "sums to 0 if the working set is nil" do
      Price.sum(nil).should == 0
    end

  end

  describe "when pricing partnerships" do

    describe "and no stations are in the working set" do

      it "does not modify the running total" do
        worksheet = Worksheet.new([])
        worksheet.total = 200
        Price.partnerships(worksheet)
        worksheet.total.should == 200
      end

    end

    describe "and one of the stations in the partnership has not been selected" do

      before(:each) do
        @smooth_fm = Factory(:valid_radio, :fee => 40)
        @kiss = Factory(:valid_radio, :fee => 20)
        @capital_fm = Factory(:valid_radio, :fee => 10)
        @capital_fm.partner_with(@smooth_fm, 30)
      end

      it "does not modify the working set" do
        worksheet = Worksheet.new([@smooth_fm, @kiss])
        Price.partnerships(worksheet)
        worksheet.remaining == [@smooth_fm, @kiss]
      end

      it "does not modify the running total" do
        worksheet = Worksheet.new([@smooth_fm, @kiss])
        worksheet.total.should == 0
        Price.partnerships(worksheet)
        worksheet.total.should == 0
      end

      describe "and both stations in the partnership have been selected" do

        it "applies the discounted partnership price to the running total" do
          worksheet = Worksheet.new([@smooth_fm, @kiss, @capital_fm])
          Price.partnerships(worksheet)
          worksheet.total.should == 30
        end

        it "removes both stations from the selected stations" do
          worksheet = Worksheet.new([@smooth_fm, @kiss, @capital_fm])
          Price.partnerships(worksheet)
          worksheet.remaining.should == [@kiss]
        end

        it "adds a notification that the partnership price has been applied" do
          worksheet = Worksheet.new([@smooth_fm, @kiss, @capital_fm])
          Price.partnerships(worksheet)
          worksheet.messages.size.should == 1
          worksheet.messages[0].should == "#{@smooth_fm.name} and #{@capital_fm.name} are bundled at a rate of £30.0"
        end

      end

    end

  end

  describe "when pricing split-frequency bundles" do

    before(:all) do
      @am_network = Network.create!(:name => "ILR AM")
      @fm_network = Network.create!(:name => "ILR FM")
    end

    describe "and the AM stations in the working set have a combined fee greater than £1000" do

      before(:each) do
        @smooth_am = Factory(:valid_radio, :fee => 400, :network => @am_network)
        @kiss = Factory(:valid_radio, :fee => 700, :network => @am_network)
        @capital_fm = Factory(:valid_radio, :fee => 300, :network => @fm_network)
        @all_stations = [@smooth_am, @kiss, @capital_fm]
      end

      it "removes the AM stations from the working set" do
        worksheet = Worksheet.new(@all_stations)
        Price.split_frequency(worksheet)
        worksheet.remaining.should == [@capital_fm]
      end

      it "applies the discounted AM price of £1000 to the running total" do
        worksheet = Worksheet.new(@all_stations)
        Price.split_frequency(worksheet)
        worksheet.total.should == 1000
      end

      it "adds a notification that the discounted AM price of £1000 has been applied" do
        worksheet = Worksheet.new(@all_stations)
        Price.split_frequency(worksheet)
        worksheet.messages.size.should == 1
        worksheet.messages[0].should == "The combined rate for stations in ILR AM has exceeded £1000 so they are bundled at a fee of £1000"
      end

      describe "and the FM stations in the working set have a combined fee greater than £1000" do

        before(:each) do
          @jazz_fm = Factory(:valid_radio, :fee => 800, :network => @fm_network)
          @all_stations << @jazz_fm
        end

        it "removes the FM stations from the working set" do
          worksheet = Worksheet.new(@all_stations)
          Price.split_frequency(worksheet)
          worksheet.remaining.should == []
        end

        it "applies the discounted AM/FM price of £1500 to the running total" do
          worksheet = Worksheet.new(@all_stations)
          Price.split_frequency(worksheet)
          worksheet.total.should == 1500
        end

        it "adds a notification that the joint split-frequency discount has been applied" do
        worksheet = Worksheet.new(@all_stations)
        Price.split_frequency(worksheet)
        worksheet.messages.size.should == 1
        worksheet.messages[0].should == "The combined rate for stations in both ILR FM and ILR AM has exceeded £2000 so they are bundled at a rate of £1500"
        end

      end

    end

    describe "and the FM stations in the working set have a combined fee greater than £1000" do

      before(:each) do
        @smooth_am = Factory(:valid_radio, :fee => 400, :network => @am_network)
        @kiss = Factory(:valid_radio, :fee => 800, :network => @fm_network)
        @capital_fm = Factory(:valid_radio, :fee => 300, :network => @fm_network)
        @all_stations = [@smooth_am, @kiss, @capital_fm]
      end

      it "removes the FM stations from the working set" do
          worksheet = Worksheet.new(@all_stations)
          Price.split_frequency(worksheet)
          worksheet.remaining.should == [@smooth_am]
      end

      it "applied the discounted FM price of £1000 to the running total" do
          worksheet = Worksheet.new(@all_stations)
          Price.split_frequency(worksheet)
          worksheet.total.should == 1000
      end

      it "adds a notification that the discounted FM price of £1000 has been applied" do
        worksheet = Worksheet.new(@all_stations)
        Price.split_frequency(worksheet)
        worksheet.messages.size.should == 1
        worksheet.messages[0].should == "The combined rate for stations in ILR FM has exceeded £1000 so they are bundled at a fee of £1000"
      end

    end

  end

end
