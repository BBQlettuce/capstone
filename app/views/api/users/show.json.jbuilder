json.extract! @user, :id, :email, :name

json.resume do
  json.extract! @user.resume, :text, :updated_at
  # json.resume_pdf asset_path(@user.resume.resume_pdf.url)
end

json.posted_jobs do
  json.array! @user.posted_jobs do |p_job|
    json.partial! 'api/jobs/mini_show', job: p_job
  end
end
