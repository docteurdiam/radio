class RemindersController < ApplicationController

  def show
    @radios = params[:radios].join(",")
    render :layout => false
  end

  def deliver
    radios =  Radio.find(params[:radios].split(","))
    identifiers = params[:radios].split(",")
    total = FeeCalculator.new.calculate(identifiers)
    messages = FeeCalculator.new.analyze(identifiers)
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios, total, messages)
    render :text => "ok"
  end

end