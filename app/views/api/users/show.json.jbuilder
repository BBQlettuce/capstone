json.extract! @user, :id, :email, :name

json.resume @user.resume

json.posted_jobs do
  json.array! @user.posted_jobs do |p_job|
    json.partial! 'api/jobs/mini_show', job: p_job
  end
end
