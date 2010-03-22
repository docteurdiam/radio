class UsersController < ApplicationController
  before_filter :require_user

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
      redirect_back_or_default users_path
    else
      render :action => :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path
  end

  def update
    @user = @current_user
    if @user.update_attributes(params[:user])
      flash[:notice] = "Account updated!"
      redirect_to users_path
    else
      render :action => :edit
    end
  end
end
