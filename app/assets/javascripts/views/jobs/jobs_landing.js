Indoge.Views.JobsLanding = Backbone.View.extend({
  template: JST["jobs/jobs_landing"],

  className: "todo",

  render: function() {
    this.$el.html(this.template);
    return this;
  }
})
