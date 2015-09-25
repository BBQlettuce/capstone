Indoge.Views.JobShow = Backbone.View.extend({
  template: JST["jobs/job_show"],

  className: "content",

  events: {
    "click .save-link": "saveJob",
    "click .unsave-link": "unsaveJob",
    "click .delete-job-link": "deleteJob"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(Indoge.currentUser, "sync", this.render);
  },

  render: function() {
    var saved = Indoge.currentUser.savedJobs().some(function(job) {
      return job.id === this.model.id
    }.bind(this));

    this.$el.html(this.template({job: this.model, saved: saved, timeAgo: this.timeAgo()}));
    return this;
  },

  timeAgo: function() {
    var msAgo = Date.now() - Date.parse(this.model.get("created_at"));
    // first case 1 hr ago
    if (msAgo <= 7200000) {
      return "just posted";
    // if less than a day, post hours
    } else if (msAgo <= 86400000) {
      return (Math.floor(msAgo/3600000)) + " hours ago";
    } else if (msAgo <= 172800000){
      return "1 day ago";
    } else {
      return (Math.floor(msAgo/86400000)) + "days ago";
    }
  },

  saveJob: function(e) {
    e.preventDefault();
    var view = this;
    var data = {
      "jobsave[job_id]": this.model.id,
      "jobsave[user_id]": Indoge.currentUser.id}
    $.ajax({
      url: "/api/jobsaves",
      type: "POST",
      dataType: "json",
      data: data,
      success: function() {
        Backbone.history.navigate("myprofile", {trigger: true})
        // console.log("job saved!");
      }
    })
  },

  unsaveJob: function(e) {
    e.preventDefault();
    var data = {
      "jobsave[job_id]": this.model.id,
      "jobsave[user_id]": Indoge.currentUser.id}
    $.ajax({
      url: "/api/jobsaves",
      type: "DELETE",
      dataType: "json",
      data: data,
      success: function() {
        Backbone.history.navigate("myprofile", {trigger: true})
        // console.log("job unsaved!");
      }
    })
  },

  deleteJob: function() {
    this.model.destroy({
      success: function() {
        this.remove();
        Backbone.history.navigate("hire", {trigger: true});
      }.bind(this)
    });

  }

})
