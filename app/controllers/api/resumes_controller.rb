class Api::ResumesController < ApplicationController
  before_action :require_signin, only: [:create, :update, :destroy]

  def create
    @resume = current_user.build_resume(resume_params);
    if @resume.save
      render json: @resume
    else
      render json: @resume.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @resume = Resume.find(params[:id])
    if @resume.update(resume_params)
      render json: @resume
    else
      render json: @resume.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @resume = Resume.find(params[:id])
    @resume.try(:destroy)
    render json: {}
  end

  def show
    @resume = Resume.find(params[:id])
    render :show
  end

  def index
    @resumes = Resume.where("private = false")
    render :index
  end

  # def my
  #   @resume = current_user.resume
  #   render :show
  # end

  def search
    
  end

  private
  def resume_params
    params.require(:resume).permit(:text, :private)
  end

end
