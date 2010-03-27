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
    if !params[:file] || params[:file].size.zero? then
      flash[:error] = 'No file was selected'
    else
      parse(params[:file])      
      flash[:status] = "Done"
    end
    render 'upload'
  end

  private

  def parse(upload)
    upload.rewind
    CSV::Reader.parse(upload) do |row|
      Radio.create!(:name => row[0], :fee => row[1], :category => row[2])
    end
  end

end