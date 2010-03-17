class RadiosController < ApplicationController
  resource_controller

  def search
    query = params[:query]
    radios = Radio.find(:all, :conditions => ["name like '#{query}%"])
    render :json => radios
  end

end