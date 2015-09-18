class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if user.nil?
      head :unprocessable_entity
    else
      signin!(user)
      redirect_to root_url
    end
  end

  def destroy
    sign_out!
    redirect_to root_url
  end
end
