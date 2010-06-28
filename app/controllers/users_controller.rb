class UsersController < ApplicationController
  before_filter :require_user
  resource_controller

  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "Account registered!"
      redirect_to users_path
    else
      render :action => :new
    end
  end
  
end
