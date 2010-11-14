class PartnershipsController < ApplicationController
  resource_controller

  def index
    @partnerships = Partnership.paginate(:page => params[:page], :per_page => 15)
  end

  def new
    @partnership = Partnership.new
    @radios = Radio.all.order_by("name")
  end

  def create
    station_id = params[:relationship][:radio1]
    partner_id = params[:relationship][:radio2]
    fee = params[:relationship][:fee]
    if station_id.blank? or partner_id.blank? or fee.blank?
      @radios = Radio.all.order_by("name")
      render :action => "new"
    else
      @partnership = Partnership.create(:fee => fee)
      @partnership.radios << Radio.find(station_id)
      @partnership.radios << Radio.find(partner_id)
      if @partnership.save
        flash[:notice] = 'Partnership was successfully created.'
        redirect_to(partnerships_path)
      else
        @radios = Radio.all.order_by("name")
        render :action => "new"
      end
    end

  end

end