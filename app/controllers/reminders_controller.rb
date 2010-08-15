class RemindersController < ApplicationController

  def show
    @radios = params[:radios].join(",")
    render :layout => false
  end

  def deliver
    stations = parse(params[:radios])
    radios = stations.map {|id| Radio.find(id)}
    total = FeeCalculator.new.calculate(stations)
    messages = FeeCalculator.new.analyze(stations)
    name = params[:name]
    email = params[:email]
    EmailSender.deliver_reminder_notification(name, email, radios, total, messages)
    render :text => "ok"
  end

end