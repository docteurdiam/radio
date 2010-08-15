describe FeeCalculator do

  describe "when calculating or analyzing a fee" do

    before(:each) do
      radio1 = Radio.create(:name => "Radio 1", :fee => 70, :category => "Local & Regional", :note => "")
      radio2 = Radio.create(:name => "Radio 2", :fee => 40, :category => "National and News", :note => "")
      @identifiers = [radio1.id, radio2.id]
      @calculator = FeeCalculator.new
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

      it "adds a message indicating the cap has been reached" do
        messages = @calculator.analyze(@identifiers).should == ["The total rate for stations in ILR AM has exceeded £1000 so they are packaged at a rate of £1000"]
      end

      describe "and the station fees in all networks add up to over £1000" do

        before(:each) do
          network = Network.create!(:name => "ILR FM")
          radio5 = Radio.create(:name => "Radio 3", :fee => 800, :category => "Local & Regional", :note => "")
          radio6 = Radio.create(:name => "Radio 4", :fee => 300, :category => "Local & Regional", :note => "")
          network.radios << radio5
          network.radios << radio6
          network.save!
          @identifiers << radio5.id
          @identifiers << radio6.id
        end

        it "adds a message indicating the cap for both networks been reached" do
          messages = @calculator.analyze(@identifiers).should == ["The total rate for stations in both ILR FM and ILR AM has exceeded £2000 so they are packaged at a rate of £1500"]
        end

        it "caps the price for all networks at £1500" do
          @calculator.calculate(@identifiers).should eql(1610)
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

        before(:each) do
          @identifiers << @radio4
        end

        it "adds a message indicating the partnership fee has been applied" do
          @calculator.analyze(@identifiers).should == ["Both Radio 3 and Radio 4 are packaged together at a rate of £10"]
        end

        it "applies the partnership price to both stations" do
          @calculator.calculate(@identifiers).should eql((110 + 5 + 5).to_f)
        end

      end

      describe "and its partner is not selected" do

        it "does not apply the partnership price" do
          @calculator.calculate(@identifiers).should eql(110 + 80)
        end

      end

    end

  end

end