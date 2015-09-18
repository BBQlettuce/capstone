class Api::CurrentusersController < ApplicationController
  before_action :require_signin

  def show
    @c_user = current_user
    render :show
  end
end
