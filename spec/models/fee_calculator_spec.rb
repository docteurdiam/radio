# coding: utf-8

require File.dirname(__FILE__) + '/../spec_helper'

describe FeeCalculator do

  describe "when calculating a fee" do

    before(:each) do
      @calculator = FeeCalculator.new
    end

    describe "and no stations have been selected" do

      it "creates a worksheet containing no stations" do
        Worksheet.should_receive(:new).with([]).and_return
        @calculator.calculate(nil)
      end

    end

    describe "and stations have been selected" do

      before(:each) do
        @radio1 = Radio.create(:name => "Radio 1", :fee => 70, :category => "Local & Regional", :note => "")
        @radio2 = Radio.create(:name => "Radio 2", :fee => 40, :category => "National and News", :note => "")
        @identifiers = [@radio1.id, @radio2.id]
        Price.stub!(:partnerships)
        Price.stub!(:split_frequency)
        Price.stub!(:totals)
        Price.stub!(:sum).and_return(0)
        Radio.stub!(:find).and_return([@radio1, @radio2])
      end

      it "calculates discounts for partnerships" do
        Price.should_receive(:partnerships)
        @calculator.calculate(@identifiers)
      end

      it "calculates discounts for totals" do
        Price.should_receive(:totals)
        @calculator.calculate(@identifiers)
      end

      it "calculates discounts for split/frequency buyouts" do
        Price.should_receive(:split_frequency)
        @calculator.calculate(@identifiers)
      end

      it "calculates the rates for all stations to which discounts have not been applied" do
        Price.should_receive(:sum)
        @calculator.calculate(@identifiers)
      end

    end

  end

end