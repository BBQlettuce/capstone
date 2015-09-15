module ApplicationHelper
  def render_auth_token
    html = <<-HTML.html_safe
      <input
        type="hidden"
        name="authenticity_token"
        value="#{form_authenticity_token}">
    HTML

    html
  end

  def render_errors(item)
    errors = item.errors.messages
    return if errors.empty?
    html_output = ""
    errors.each do |error|
      html_output += "<div> #{error} </div></br>"
    end
    html_output.html_safe
  end
  
end
