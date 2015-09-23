json.extract! resume, :id, :text_snippet, :updated_at
json.poster do
  json.extract! resume.user, :name, :email, :id
end
