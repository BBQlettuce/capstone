class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user, :is_hoomin?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def is_hoomin?
    current_user.is_hoomin
  end

  def is_doge?
    !current_user.is_hoomin
  end

  def logged_in?
    !current_user.nil?
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_session_url if !logged_in?
  end

end
