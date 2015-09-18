Indoge.Views.JobShow = Backbone.View.extend({
  template: JST["jobs/job_show"],

  events: {
    "click .save-link": "saveJob",
    "click .unsave-link": "unsaveJob",
    "click .delete-job-link": "deleteJob"
  },

  initialize: function(options) {
    this.job = options.job;
    this.listenTo(this.job, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({job: this.job}));
    return this;
  },

  saveJob: function() {

  },

  unsaveJob: function() {

  },

  deleteJob: function() {
    this.job.destroy();
    this.remove();
    Backbone.history.navigate("hire", {trigger: true});
  }

})
