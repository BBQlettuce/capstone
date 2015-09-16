json.array! @resumes do |resume|
  json.extract! resume, :text
end
