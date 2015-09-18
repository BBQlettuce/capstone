Indoge.Views.JobShow = Backbone.View.extend({
  template: JST["jobs/job_show"],

  initialize: function(options) {
    this.job = options.job;
    this.listenTo(this.job, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({job: this.job}));
    return this;
  }


})
