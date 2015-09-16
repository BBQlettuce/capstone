Indoge.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
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
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
