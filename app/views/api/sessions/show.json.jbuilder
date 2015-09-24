json.extract! current_user, :id, :email, :name

json.resume do
  json.extract! current_user.resume, :text, :updated_at
  json.resume_pdf asset_path(current_user.resume.resume_pdf.url)
end

json.posted_jobs do
  json.array! current_user.posted_jobs do |p_job|
    json.partial! 'api/jobs/mini_show', job: p_job
  end
end

json.saved_jobs do
  json.array! current_user.saved_jobs do |s_job|
    json.partial! 'api/jobs/mini_show', job: s_job
  end
end
