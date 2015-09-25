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

  def search
    min_salary = params[:min_salary]
    jobs_to_search = min_salary.nil? ? Job.all : Job.where("salary >= ?", min_salary)
    if params[:what] == ""
      @search_results = jobs_to_search
                            .order("created_at DESC")
                            .includes(:poster)
                            .page(params[:page])
    else
      @search_results = jobs_to_search
                            .order("created_at DESC")
                            .search_jobs_by_all(params[:what])
                            .includes(:poster)
                            .page(params[:page])
    end
    render :search
  end

  private
  def job_params
    params.require(:job).permit(:title, :description, :salary, :expire_date, :url)
  end

end
