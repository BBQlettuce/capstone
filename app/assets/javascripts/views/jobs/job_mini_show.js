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
    var saved = Indoge.currentUser.savedJobs().some(function(job) {
      return job.attributes.id === this.job.id
    }.bind(this));
    console.log(saved);
    this.$el.html(this.template({job: this.job, saved: saved}));
    return this;
  },

  saveJob: function(e) {
    e.preventDefault();
    var view = this;
    var data = {
      "jobsave[job_id]": this.job.id,
      "jobsave[user_id]": Indoge.currentUser.id}
    $.ajax({
      url: "/api/jobsaves",
      type: "POST",
      dataType: "json",
      data: data,
      success: function() {
        Indoge.currentUser.fetch();
        console.log("job saved!");
      }
    })
  },

  unsaveJob: function(e) {
    e.preventDefault();
    var data = {
      "jobsave[job_id]": this.job.id,
      "jobsave[user_id]": Indoge.currentUser.id}
    $.ajax({
      url: "/api/jobsaves",
      type: "DELETE",
      dataType: "json",
      data: data,
      success: function() {
        Indoge.currentUser.fetch();
        console.log("job unsaved!");
      }
    })
  }

})
