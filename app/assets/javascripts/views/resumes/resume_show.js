Indoge.Views.ResumeShow = Backbone.View.extend({
  template: JST["resumes/resume_show"],

  className: "content",

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({resume: this.model, lastUpdated: this.lastUpdated()}));
    return this;
  },

  lastUpdated: function() {
    var time = Date(this.model.get("updated_at"));
    return "Updated: " + time.slice(4, 15);
  }

})
