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

    describe "and one of the stations in the partnership is not in the working set" do

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

      describe "and both stations in the partnership are in the working set" do

        it "applies the discounted partnership price to the running total" do
          worksheet = Worksheet.new([@smooth_fm, @kiss, @capital_fm])
          Price.partnerships(worksheet)
          worksheet.total.should == 30
        end

        it "removes both stations from the working set" do
          worksheet = Worksheet.new([@smooth_fm, @kiss, @capital_fm])
          Price.partnerships(worksheet)
          worksheet.remaining.should == [@kiss]
        end

      end

    end

  end

  describe "when pricing split-frequency bundles" do

    before(:each) do
      am_network = Network.create!(:name => "ILR AM")
      fm_network = Network.create!(:name => "ILR FM")
    end

    describe "and the AM stations in the working set have a combined fee greater than £1000" do

      it "removes the AM stations from the working set" do
        pending
      end

      it "applies the discounted AM price of £1000 to the running total" do
        pending
      end

      describe "and the FM stations in the working set have a combined fee greater than £1000" do

        it "removes the FM stations from the working set" do
          pending
        end

        it "applies the discounted AM/FM price of £1500 to the running total" do
          pending
        end

      end

    end

    describe "and the FM stations in the working set have a combined fee greater than £1000" do

      it "removes the FM stations from the working set" do
        pending
      end

      it "applied the discounted FM price of £1000 to the running total" do
        pending
      end

    end

  end

end
