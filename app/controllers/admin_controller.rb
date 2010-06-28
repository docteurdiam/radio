require 'csv'

class AdminController < ApplicationController
  before_filter :require_user

  def logout
    
  end

  def home
    @radio_count = Radio.count(:all)
    @user_count = User.count(:all)
    render 'home', :layout => "master"
  end

  def upload

  end

  def commit
    uploader = Upload.new
    uploader.save_upload(params[:file])
    radios = Parser.new.parse(uploader.absolute_path)
    DataImport.new().process(radios)
    flash[:status] = "Done"
    render 'upload'
  end

  def clear
    Radio.delete_all
    Total.delete_all
    Network.delete_all
    Partnership.delete_all
    flash[:status] = "Done"
    render :action => :upload
  end

end