require 'resource_controller'

class AdvertsController < ApplicationController
  resource_controller

  def active
    ad = Advert.first
    render :text => ad ? ad.image.url(:normal) : ""
  end

  create.before do
    Advert.delete_all
  end

  create.wants.html do
    redirect_to adverts_path
  end

end