class PartnershipsController < ApplicationController

  def index
    @partnerships = Partnership.paginate(:page => params[:page], :per_page => 20)
  end

  def new
    @partnership = Partnership.new
    @radios = Radio.find(:all, :order => "name")
  end

  def destroy
    @partnership = Partnership.find(params[:id])
    @partnership.destroy
    redirect_to(partnerships_url)
  end

  def create
    fee = params[:partnership][:fee]
    station_id = params[:partnership][:station_id]
    partner_id = params[:partnership][:partner_id]
    @partnership = Partnership.new
    @partnership.station = Radio.find(station_id)
    @partnership.partner = Radio.find(partner_id)
    @partnership.fee = fee
    if @partnership.save
      debugger
      flash[:notice] = 'Partnership was successfully created.'
      redirect_to(partnerships_path)
    else
      @radios = Radio.find(:all, :order => "name")
      render :action => "new"
    end
  end

end