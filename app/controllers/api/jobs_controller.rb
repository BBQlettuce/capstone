class Api::JobsController < ApplicationController
  before_action :require_login, only: [:new, :create, :destroy]

  # creating a job as the current user
  def create
    @job = current_user.jobs.new(job_params)
    if @job.save
      render json: @job
    else
      render json: @job.errors.full_messages, status: :unprocessable_entity
    end
  end

  # destroy current job, only works if it's within current user's jobs
  def destroy
    @job = current_user.jobs.find(params[:id])
    @job.try(:destroy)
    render json: {}
  end

  # to show a single job
  def show
    @job = Job.find(params[:id])
  end

  # to show all jobs in index
  def index
    @jobs = Job.all
  end

  # to show the current user's jobs
  def my
    @jobs = current_user.jobs
    render :index
  end

  private
  def job_params
    params.require(:job).permit(:title, :description, :salary, :expire_date, :url)
  end

end
