Indoge.Views.JobShow = Backbone.View.extend({
  template: JST["jobs/job_show"],

  initialize: function(options) {
    this.listenTo(this.job, "sync", this.render);
  },

  render: function() {

  }


})
