class Api::ResumesController < ApplicationController
  def create
  end

  def destroy
  end

  def edit
  end

  def show
  end

  def index
  end

  def my
  end

  private
  def resume_params
    params.require(:resume).permit(:text)
  end
end
