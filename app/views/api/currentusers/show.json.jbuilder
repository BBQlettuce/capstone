json.extract! @c_user, :id, :email, :name

json.resume @c_user.resume

json.posted_jobs do
  json.array! @c_user.posted_jobs do |p_job|
    json.partial! 'api/jobs/mini_show', job: p_job
  end
end
