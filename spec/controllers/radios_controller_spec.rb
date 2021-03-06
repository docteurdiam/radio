require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe RadiosController do

  describe "/calculate" do

    before(:each) do
      @identifiers = ["2419-station", "12-station"]
      @fee_calculator = double(FeeCalculator, :calculate => double(Worksheet).as_null_object)
      FeeCalculator.stub!(:new).and_return(@fee_calculator)
    end

    it "crates a new fee calculator to compute the rates" do
      FeeCalculator.should_receive(:new)
      post :calculate, :identifiers => @identifiers
    end

    it "includes the independent stations in the fee calculation" do
      @fee_calculator.should_receive(:calculate).with([2419, 12]).and_return(mock(Worksheet).as_null_object)
      post :calculate, :identifiers => @identifiers
    end

    describe "when networks are included" do

      before(:each) do
        @identifiers << "15-network"
        @network = mock_model(Network)
      end

      it "retrieves the stations in the network and includes them in the fee calculation" do
        Network.should_receive(:find).with("15").and_return(@network)
        @network.should_receive(:radios).and_return([mock_model(Radio, :id => 33), mock_model(Radio, :id => 35)])
        @fee_calculator.should_receive(:calculate).with([2419, 12, 33, 35])
        post :calculate, :identifiers => @identifiers
      end

    end

  end

end