Indoge.Views.ResumeForm = Backbone.View.extend({
  template: JST["resumes/resume_form"],

  events: {
    "submit .text": "saveResume",
    "change #resume_post": "parseFileIntoTextarea"
  },

  className: "my-resume-page",

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({user: this.user}));
    return this;
  },

  parseFileIntoTextarea: function(e) {
    e.preventDefault();
    var file = this.$("#resume_post")[0].files[0];
    var tempFormData = new FormData();
    tempFormData.append("resume[resume_pdf]", file);
    var that = this;

    $.ajax({
      url: "api/resumes/parse_pdf",
      type: "POST",
      data: tempFormData,
      processData: false,
      contentType: false,
      success: function(response) {
        parsed_text = response.parsed_text;
        that.$("textarea").html(parsed_text);
      },
      error: function(){
        alert("invalid file");
        Backbone.history.navigate("myresume", {trigger: true})
      }
    });
  },

  saveResume: function(e) {
    e.preventDefault();
    var file = this.$("#resume_post")[0].files[0];
    var attrs = this.$(".text").serializeJSON();
    var formData = new FormData();
    formData.append("resume[text]", attrs.text);
    formData.append("resume[private]", attrs.private);
    if (!!file) {
      formData.append("resume[resume_pdf]", file);
    }

    this.user.resume().saveFormData(formData, {
      success: function() {
        Backbone.history.navigate("myprofile", { trigger: true });
      },
      error: function() {
        alert("all fields must be filled out");
      }
    });
  }

})
