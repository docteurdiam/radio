class ApplicationController < ActionController::Base
  helper :all
  helper_method :current_user_session, :current_user
  protect_from_forgery
  layout "master"

  private

  def current_user_session
    return @current_user_session if defined?(@current_user_session)
    @current_user_session = UserSession.find
  end

  def current_user
    return @current_user if defined?(@current_user)
    @current_user = current_user_session && current_user_session.record
  end

  def require_user
    unless current_user
      redirect_to "/user_session/new"
      return false
    end
  end

  def parse(identifiers)
    parts = identifiers.map do |identifier|
      identifier.split("-")
    end
    items = parts.map do |part|
      {:type => part[1], :id => part[0]}
    end
    stations = []
    items.each do |item|
      if item[:type] == "station"
        stations << item[:id]
      else
        network = Network.find(item[:id])
        stations = stations + network.radios.map {|radio| radio.id}
      end
    end
    stations
  end

end
