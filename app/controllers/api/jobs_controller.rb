Module Api
  class JobsController < ApiController
    before_action :require_login, only: [:new, :create, :destroy]

    def new
      @job = Job.new
      render :new
    end

    def create
      # @job = Job.new(job_params)
      current_user.jobs.create!(job_params)
      redirect_to user_url(current_user)
    end

    def destroy
    end

    def show
      @job = Job.find(params[:id])
      render :show
    end

    def index
      @jobs = Job.all
      render :index
    end

    private
    def job_params
      params.require(:job).permit(:title, :description, :salary, :expire_date, :url)
    end

  end

end
