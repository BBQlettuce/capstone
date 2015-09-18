Indoge.Views.JobMiniShow = Backbone.View.extend({
  template: JST["jobs/job_mini_show"],

  tagName: "li",
  className: "job-tab",

  events: {
    "click .save-link": "saveJob",
    "click .unsave-link": "unsaveJob"
  },

  initialize: function(options) {
    this.job = options.job;
    this.listenTo(this.job, "sync", this.render);
    this.listenTo(Indoge.currentUser, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({job: this.job}));
    return this;
  },

  saveJob: function(e) {
    e.preventDefault();
  },

  unsaveJob: function(e) {
    e.preventDefault();
  }

})
