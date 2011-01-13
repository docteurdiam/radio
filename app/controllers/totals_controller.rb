class TotalsController < ApplicationController
  resource_controller

  def index
    @totals = Total.paginate(:page => params[:page], :per_page => 15)
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

  def remove_station
    @total = Total.find(params[:id])
    @station = Radio.find(params[:station_id])
    @total.radios.delete(@station)
    render :text => "OK"
  end

  def update
    @total = Total.find(params[:id])
    if @total.update_attributes(params[:total])
      @total.radios << Radio.find(params[:radio][:id]) unless params[:radio][:id].blank?
      @total.save!
      flash[:notice] = 'Total was successfully updated.'
      redirect_to(totals_url)
    else
      render :action => "edit"
    end
  end

  def show
    @total = object
  end

  def edit
    @total = Total.find(params[:id])
    @radios = Radio.order("name")
  end

end
