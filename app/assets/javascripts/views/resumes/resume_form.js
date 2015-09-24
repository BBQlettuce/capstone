Indoge.Views.ResumeForm = Backbone.View.extend({
  template: JST["resumes/resume_form"],

  events: {
    "submit .text": "saveResume",
    // "submit .pdftest": "savePdf",
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
        alert("you dun goofed");
      }
    });
  },

  saveResume: function(e) {
    e.preventDefault();
    var file = this.$("#resume_post")[0].files[0];
    var text = this.$("textarea").val();

    var formData = new FormData();
    formData.append("resume[text]", text);
    formData.append("resume[resume_pdf]", file);

    this.user.resume().saveFormData(formData, {
      success: function(){
        Backbone.history.navigate("myprofile", { trigger: true });
      }
    });
  }

  // saveResume: function(e) {
  //   e.preventDefault();
  //   var data = $(e.currentTarget).serializeJSON();
  //   if (!data.private) {
  //     data.private = false;
  //   };
  //   this.user.resume().set(data);
  //   this.user.resume().save({}, {
  //     success: function() {
  //       Backbone.history.navigate("myprofile", {trigger: true});
  //     },
  //     error: function() {
  //       console.log("huehuehue");
  //     }
  //   })
  // }
})
