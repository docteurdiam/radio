class RemindersController < ApplicationController

  def display
    debugger
  end

  def send
    radios = params[:radios]
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios)    
  end

end