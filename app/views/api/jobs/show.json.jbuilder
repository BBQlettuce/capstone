json.extract! @job, *@job.attributes.keys
json.poster do
  json.extract! @job.poster, :name, :email, :id
end
