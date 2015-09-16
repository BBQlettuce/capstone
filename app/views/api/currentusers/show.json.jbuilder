json.extract! @c_user, :email, :name, :is_hoomin

if is_hoomin?
  json.jobs @c_user.jobs
else
  json.resume @c_user.resume
end
