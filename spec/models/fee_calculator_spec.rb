describe FeeCalculator do

  describe "when calculating a fee" do

    before(:each) do
      radio1 = Radio.create(:name => "Radio 1", :fee => 70, :category => "Local & Regional", :note => "")
      radio2 = Radio.create(:name => "Radio 2", :fee => 40, :category => "National and News", :note => "")
      @identifiers = [radio1.id, radio2.id]
    end

    it "sums up the fee for all the radios" do
      FeeCalculator.new.calculate(@identifiers).should eql(110)
    end

    describe "when the station fees in any network add up to over £1000"  do

      before(:each) do
        network = Network.create!(:name => "ILR AM")
        radio3 = Radio.create(:name => "Radio 3", :fee => 700, :category => "Local & Regional", :note => "")
        radio4 = Radio.create(:name => "Radio 4", :fee => 600, :category => "Local & Regional", :note => "")
        network.radios << radio3
        network.radios << radio4
        network.save!
        @identifiers << radio3.id
        @identifiers << radio4.id
      end

      it "caps their price at £1000" do
        FeeCalculator.new.calculate(@identifiers).should eql(1110)
      end

      describe "and the station fees in all networks add up to over £1000" do

        it "caps the price for all networks at £1500" do
          network = Network.create!(:name => "ILR FM")
          radio5 = Radio.create(:name => "Radio 3", :fee => 800, :category => "Local & Regional", :note => "")
          radio6 = Radio.create(:name => "Radio 4", :fee => 300, :category => "Local & Regional", :note => "")
          network.radios << radio5
          network.radios << radio6
          network.save!
          @identifiers << radio5.id
          @identifiers << radio6.id
          FeeCalculator.new.calculate(@identifiers).should eql(1610)
        end

      end

    end

    describe "when a station is in partnership " do

      before(:each) do
        radio3 = Radio.create(:name => "Radio 3", :fee => 80, :category => "Local & Regional", :note => "")
        @radio4 = Radio.create(:name => "Radio 4", :fee => 20, :category => "Local & Regional", :note => "")
        partnership = Partnership.create!(:fee => 10)
        partnership.radios << radio3
        partnership.radios << @radio4
        partnership.save!
        @identifiers << radio3
      end

      describe "and both stations are selected" do

        it "applies the partnership price to both stations" do
          @identifiers << @radio4
          FeeCalculator.new.calculate(@identifiers).should eql(110 + 10 + 10)
        end

      end

      describe "and its partner is not selected" do

        it "does not apply the partnership price" do
          FeeCalculator.new.calculate(@identifiers).should eql(110 + 80)
        end

      end

    end

  end

end