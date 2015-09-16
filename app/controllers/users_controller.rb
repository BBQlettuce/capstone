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
      render :new
    end
  end

  # def show
  #   @user = User.find(params[:id])
  #   redirect_to root_url if @user != current_user
  #
  #   if @user.is_hoomin
  #     render :hoomin_show
  #   else
  #     render :doge_show
  #   end
  # end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :is_hoomin)
  end
end
