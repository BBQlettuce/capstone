json.extract! job, :id, :title, :description_snippet, :created_at
json.poster do
  json.extract! job.poster, :name, :email, :id
end
