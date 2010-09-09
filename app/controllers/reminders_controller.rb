class RemindersController < ApplicationController

  def show
    @radios = params[:radios].join(",")
    render :layout => false
  end

  def deliver
    identifiers = parse(params[:radios])
    radios = Radio.find identifiers.uniq
    worksheet = FeeCalculator.new.calculate(identifiers)
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios, worksheet.total, worksheet.messages)
    render :text => "ok"
  end

end