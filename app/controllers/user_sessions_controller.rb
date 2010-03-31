class UserSessionsController < ApplicationController
  before_filter :require_user, :only => :destroy

  def new
    @user_session = UserSession.new
    render :action => :new, :layout => "backend"
  end

  def create
    @user_session = UserSession.new(params[:user_session])
    if @user_session.save
      redirect_to "/admin/home"
    else
      render :action => :new, :layout => "backend"
    end
  end

  def destroy
    current_user_session.destroy
    redirect_to new_user_session_url
  end

end
 