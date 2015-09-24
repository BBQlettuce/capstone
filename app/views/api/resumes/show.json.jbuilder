json.extract! @resume, :text, :updated_at
json.poster_name @resume.user.name

if !!@resume.resume_pdf_file_name
  json.resume_pdf asset_path(@resume.resume_pdf.url)
end
