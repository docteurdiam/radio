class RemindersController < ApplicationController

  def show
    @radios = params[:radios].join(",")
    render :layout => false
  end

  def deliver
    radios =  Radio.find(params[:radios].split(","))
    total = radios.inject(0){|sum, radio| sum + radio.fee}
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios, total)
    render :text => "ok"
  end

end