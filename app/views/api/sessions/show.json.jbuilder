json.extract! current_user, :id, :email, :name

if !!current_user.resume
  json.resume do
    json.extract! current_user.resume, :id, :text, :updated_at, :private
    if !!current_user.resume.resume_pdf_file_name
      json.resume_pdf asset_path(current_user.resume.resume_pdf.url)
    end
  end
end

if !!current_user.posted_jobs
  json.posted_jobs do
    json.array! current_user.posted_jobs do |p_job|
      json.partial! 'api/jobs/mini_show', job: p_job
    end
  end
end

if !!current_user.saved_jobs
  json.saved_jobs do
    json.array! current_user.saved_jobs do |s_job|
      json.partial! 'api/jobs/mini_show', job: s_job
    end
  end
end
