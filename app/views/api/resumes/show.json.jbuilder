json.extract! @resume, :text, :updated_at
json.poster do
  json.extract! @resume.user, :email, :name, :id
end

if !!@resume.resume_pdf_file_name
  json.resume_pdf asset_path(@resume.resume_pdf.url)
end
