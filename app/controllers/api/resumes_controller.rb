class Api::ResumesController < ApplicationController
  before_action :require_signin, only: [:create, :update, :destroy]

  wrap_parameters false

  def create
    @resume = current_user.build_resume(resume_params);
    byebug
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

  def search
    @search_results = Resume.where(private: false)
                        .search_resumes_by_all(params[:what])
                        .includes(:user)
                        .page(params[:page])
    render :search
  end

  def parse_pdf
    incoming_file = resume_params[:resume_pdf].tempfile
    reader = PDF::Reader.new(incoming_file)
    output_text = ""

    reader.pages.each do |page|
      output_text += page.text
    end

    render json: {parsed_text: output_text}
  end

  private
  def resume_params
    params.require(:resume).permit(:text, :private, :resume_pdf)
  end

end
