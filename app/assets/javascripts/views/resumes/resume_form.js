Indoge.Views.ResumeForm = Backbone.View.extend({
  template: JST["resumes/resume_form"],

  events: {
    "submit form": "saveResume"
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
