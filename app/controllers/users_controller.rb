class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      fail
      render :new
    end
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :is_hoomin)
  end
end
