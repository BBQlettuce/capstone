Indoge.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.jobs = options.jobs;
    this.$rootEl = $("#content");
  },

  routes: {
    "": "main",
    "jobs": "jobsIndex"
  },

  main: function() {

  },

  jobsIndex: function() {
    this.jobs.fetch();
    var view = new Indoge.Views.JobsIndex({jobs: this.jobs});
    this._swapView(view);
  }
})
