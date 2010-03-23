class RemindersController < ApplicationController

  def show
    render :layout => false
  end

  def deliver
    radios = params[:radios]
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios)    
  end

end