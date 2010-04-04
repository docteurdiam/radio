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
    station_id = params[:partnership][:station_id]
    partner_id = params[:partnership][:partner_id]
    @partnership = Partnership.create(:fee => params[:partnership][:fee])
    add_partner(@partnership, Radio.find(station_id))
    add_partner(@partnership, Radio.find(partner_id))
    if @partnership.save
      debugger
      flash[:notice] = 'Partnership was successfully created.'
      redirect_to(partnerships_path)
    else
      @radios = Radio.find(:all, :order => "name")
      render :action => "new"
    end
  end

  private

  def add_partner(partnership, station)
    station.partnership = @partnership
    station.save!
  end

end