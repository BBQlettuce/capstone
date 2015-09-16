json.extract! @c_user, :email, :name, :is_hoomin

if is_hoomin?
  json.jobs do
    json.array! @c_user.jobs do |job|
      json.partial! '../jobs/mini_show', job: job
    end
  end
else
  json.resume @c_user.resume
end
