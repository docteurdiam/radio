require 'csv'

class AdminController < ApplicationController

  def home
    
  end

  def upload

  end

  def commit
    if params[:file].size.zero? then
      flash[:error].now = 'No file was selected'
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