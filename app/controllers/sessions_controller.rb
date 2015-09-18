class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      signin!(@user)
      redirect_to root_url
    else
      @user = User.new
      render :new
    end
  end

  def destroy
    signout!
    redirect_to root_url
  end

end
