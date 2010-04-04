require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe Radio do

  it "creates valid radios" do
    Factory.create(:valid_radio)
  end

  describe "when calculating a station fee" do

    before(:each) do
      @radio_1 = Factory.create(:valid_radio, :fee => 100)
      @radio_2 = Factory.create(:valid_radio)
    end

    describe "when the station is in a partnership" do

      before(:each) do
        @partnership = Factory.create(:valid_partnership, :fee => 50)
        @radio_1.partnership = @partnership
        @radio_1.save!
        @radio_2.partnership = @partnership
        @radio_2.save!
      end

      describe "when the station's partner has also been selected" do

        it "uses the partnership fee" do
          keys = [@radio_2.id, @radio_1.id]
          @radio_1.calculate_fee(keys).should == 25
        end

      end

      describe "when the station's partner has not been selected" do

        it "uses the station fee" do
          keys = []
          @radio_1.calculate_fee(keys).should == 100
        end

      end

    end

    describe "when the station is not in a partnership" do

      it "uses the station fee" do
          keys = [@radio_2.id]
          @radio_1.calculate_fee(keys).should == 100
      end

    end

  end

end