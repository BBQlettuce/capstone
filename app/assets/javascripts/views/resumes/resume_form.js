Indoge.Views.ResumeForm = Backbone.View.extend({
  template: JST["resumes/resume_form"],

  events: {
    // "submit form": "saveResume"
    "submit .pdftest": "savePdf"
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

  savePdf: function(e) {
    e.preventDefault();
    var file = this.$("#resume_post")[0].files[0];

    var formData = new FormData();
    formData.append("resume[text]", "placeholder");
    formData.append("resume[resume_pdf]", file);

    this.user.resume().saveFormData(formData, {
      success: function(){
        debugger
        Backbone.history.navigate("myprofile", { trigger: true });
      }
    });
  },

  saveResume: function(e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    if (!data.private) {
      data.private = false;
    };
    this.user.resume().set(data);
    this.user.resume().save({}, {
      success: function() {
        Backbone.history.navigate("myprofile", {trigger: true});
      },
      error: function() {
        console.log("huehuehue");
      }
    })
  }
})
