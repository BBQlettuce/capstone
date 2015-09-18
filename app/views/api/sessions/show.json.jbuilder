json.extract! current_user, :id, :email, :name

json.resume current_user.resume

json.posted_jobs do
  json.array! current_user.posted_jobs do |p_job|
    json.partial! 'api/jobs/mini_show', job: p_job
  end
end
