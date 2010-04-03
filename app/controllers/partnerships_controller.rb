class PartnershipsController < ApplicationController

  def index
    @partnerships = Partnership.paginate(:page => params[:page], :per_page => 20)
  end

  def new
    @partnership = Partnership.new
    @radios = Radio.find(:all)
  end


  def destroy
    @partnership = Partnership.find(params[:id])
    @partnership.destroy
    redirect_to(partnerships_url)
  end

  def create
    @partnership = Partnership.new(params[:partnership])
    if @partnership.save
      flash[:notice] = 'Partnership was successfully created.'
      redirect_to(partnerships_path)
    else
      render :action => "index"
    end
  end

end