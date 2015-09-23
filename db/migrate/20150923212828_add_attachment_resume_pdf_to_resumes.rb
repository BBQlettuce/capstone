class AddAttachmentResumePdfToResumes < ActiveRecord::Migration
  def self.up
    change_table :resumes do |t|
      t.attachment :resume_pdf
    end
  end

  def self.down
    remove_attachment :resumes, :resume_pdf
  end
end
