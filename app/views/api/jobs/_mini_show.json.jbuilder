json.extract! job, :id, :title, :description, :created_at
json.poster do
  json.extract! job.poster, :name, :email, :id
end
