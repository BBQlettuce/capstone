class Api::JobsavesController < ApplicationController
  before_action :require_signin, only: [:create, :destroy]

  def create
    @jobsave = Jobsave.new(jobsave_params)
    if @jobsave.save
      render json: @jobsave
    else
      render json: @jobsave.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user_id = jobsave_params[:user_id]
    job_id = jobsave_params[:job_id]
    @jobsave = Jobsave.where("user_id = ? AND job_id = ?", user_id, job_id)
    @jobsave.destroy_all
    render json: {}
  end

  def jobsave_params
    params.require(:jobsave).permit(:user_id, :job_id)
  end

end
