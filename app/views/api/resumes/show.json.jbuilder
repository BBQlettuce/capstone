json.extract! @resume, :text
json.user do
  json.extract! @resume.user, :email, :name, :id
end
