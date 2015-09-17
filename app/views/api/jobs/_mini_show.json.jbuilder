json.extract! job, :id, :title, :description
json.poster do
  json.extract! job.poster, :name, :email, :id
end
