class RemindersController < ApplicationController

  def show
    @radios = params[:radios].join(",")
    render :layout => false
  end

  def deliver
    radios = params[:radios]
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios)
    render :text => "ok"
  end

end