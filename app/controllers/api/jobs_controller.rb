class Api::JobsController < ApplicationController
  before_action :require_signin, only: [:create, :update, :destroy]

  # creating a job as the current user
  def create
    @job = current_user.posted_jobs.build(job_params)
    if @job.save
      render json: @job
    else
      render json: @job.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @job = current_user.posted_jobs.find(params[:id])
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors.full_messages, status: :unprocessable_entity
    end
  end

  # destroy current job, only works if it's within current user's jobs
  def destroy
    @job = current_user.posted_jobs.find(params[:id])
    @job.try(:destroy)
    render json: {}
  end

  # to show a single job
  def show
    @job = Job.find(params[:id])
    render :show
  end

  # to show all jobs in index
  def index
    @jobs = Job.all
    render :index
  end

  # to show the current user's jobs
  def my_posted
    @jobs = current_user.posted_jobs
    render :index
  end

  private
  def job_params
    params.require(:job).permit(:title, :description, :salary, :expire_date, :url)
  end

end
