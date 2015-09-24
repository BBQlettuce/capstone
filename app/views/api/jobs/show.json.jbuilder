json.extract! @job, :id, :title, :salary, :description, :created_at
json.poster_name @job.poster.name
json.poster_id @job.poster.id
