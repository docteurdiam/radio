class NetworksController < ApplicationController
  resource_controller

  def index
    @networks = Network.paginate(:page => params[:page], :per_page => 20)
  end

  def create
    @network = Network.new(params[:network])
    if @network.save
      flash[:notice] = 'Network was successfully created.'
      redirect_to(networks_url)
    else
      render :action => "new"
    end
  end

  def update
    @network = Network.find(params[:id])
    if @network.update_attributes(params[:network])
      unless params[:radio][:id].blank?
        @network.radios << Radio.find(params[:radio][:id])
        @network.save!
      end
      flash[:notice] = 'Network was successfully updated.'
      redirect_to(networks_url)
    else
      render :action => "edit"
    end
  end

  def edit
    @network = Network.find(params[:id])
    @radios = Radio.find(:all, :order => "name")
  end


end