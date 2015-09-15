# Module Api
#   class JobsController < ApiController
#     before_action :require_login, only: [:new, :create, :destroy]
#
#     def new
#       @job = Job.new
#       render :new
#     end
#
#     def create
#       @job = current_user.jobs.new(job_params)
#       if @job.save
#         render json: @job
#       else
#         render json: @job.errors.full_messages, status: :unprocessable_entity
#       end
#     end
#
#     def destroy
#     end
#
#     def show
#       @job = Job.find(params[:id])
#       render json: @job
#     end
#
#     def index
#       @jobs = Job.all
#       render json: @jobs
#     end
#
#     private
#     def job_params
#       params.require(:job).permit(:title, :description, :salary, :expire_date, :url)
#     end
#
#   end
#
# end
