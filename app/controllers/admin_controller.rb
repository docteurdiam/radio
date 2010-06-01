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
      radios = Parser.new.parse(params[:file])
      DataImport.new!(radios).process()
      flash[:status] = "Done"
    end
    render 'upload'
  end

  def clear
    Radio.delete_all
    Network.delete_all
    Total.delete_all
    render :action => :upload
  end

  private


#      radio = Radio.create!(:name => row[0], :fee => row[1], :category => row[2], :note => row[7])
#      check_for_network(row[4], row[6], radio)
#      check_for_total(row[5], radio)
#      partnerships << [radio, row[3], row[6]] if row[3]
#      rescue Exception => e
#        raise %{
#        Entire Line: #{row}
#        Line Number: #{n}
#        Name: #{row[0]}
#        Fee: #{row[1]}
#        Category: #{row[2]}
#        Partner: #{row[3]}
#        Network: #{row[4]}
#        Total: #{row[5]}
#        Special Fee: #{row[6]}
#        Notes: #{row[7]}
#        Exception: #{e} }
#      end
#    end
#    create_partnerships(partnerships)

  def create_partnerships(partnerships)
    partnerships.each do |partnership|
      station = partnership[0]
      partner = Radio.find_by_name(partnership[1])
      result = Partnership.create(:fee => partnership[2])
      station.partnership = result
      partner.partnership = result
      station.save!
      partner.save!
    end
  end

  def check_for_total(name, radio)
    if name
      total = Total.find_or_create_by_name(name)
      total.radios << radio
      total.save!
    end
  end

  def check_for_network(name, fee, radio)
    if name
      network = Network.find_or_create_by_name(name)
      network.fee = fee if fee && fee.to_i > 0
      network.radios << radio
      network.save!
    end
  end

end