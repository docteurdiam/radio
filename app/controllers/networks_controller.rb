class NetworksController < ApplicationController

  def index
    @networks = Network.paginate(:page => params[:page], :per_page => 20)
  end

  def new
    @network = Network.new
  end

  def create
    @network = Network.new(params[:network])
    if @network.save
      flash[:notice] = 'Network was successfully created.'
      redirect_to(@network)
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
      redirect_to(@network)
    else
      render :action => "edit"
    end
  end


  def show
    @network = Network.find(params[:id])
  end

  def edit
    @network = Network.find(params[:id])
    @radios = Radio.find(:all)
  end


end