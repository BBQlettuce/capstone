json.array! @resumes do |resume|
  json.extract! resume, :text, :id
  json.user do
    json.extract! resume.user, :email, :name, :id
  end
end
