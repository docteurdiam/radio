class TotalsController < ApplicationController

  def index
    @totals = Total.paginate(:page => params[:page], :per_page => 20)
  end

  def new
    @total = Total.new
  end

  def create
    @total = Total.new(params[:total])
    if @total.save
      flash[:notice] = 'Total was successfully created.'
      redirect_to(@total)
    else
      render :action => "new"
    end
  end

  def stations
    total = Total.find(params[:id])
    render :json => total.radios.map{|radio| radio.to_hash}
  end

  def update
    @total = Total.find(params[:id])
    if @total.update_attributes(params[:total])
      @total.radios << Radio.find(params[:radio][:id])
      @total.save!
      flash[:notice] = 'Total was successfully updated.'
      redirect_to(@total)
    else
      render :action => "edit"
    end
  end

  def show
    @total = Total.find(params[:id])
  end

  def edit
    @total = Total.find(params[:id])
    @radios = Radio.find(:all)
  end

end