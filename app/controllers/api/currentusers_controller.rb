class Api::CurrentusersController < ApplicationController
  before_action :require_login

  def show
    @c_user = current_user
    render :show, is_hoomin?: is_hoomin?
  end
end
