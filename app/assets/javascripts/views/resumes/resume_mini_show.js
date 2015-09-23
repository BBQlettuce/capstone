Indoge.Views.ResumeMiniShow = Backbone.View.extend({
  template: JST["resumes/resume_mini_show"],

  tagName: "li",
  className: "resume-tab",

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({resume: this.model, lastUpdated: this.lastUpdated()}));
    return this;
  },

  lastUpdated: function() {
    var time = Date(this.model.attributes.updated_at);
    return "Updated: " + time.slice(4, 15);
  }

})
