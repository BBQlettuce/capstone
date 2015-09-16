Indoge.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.jobs = options.jobs;
    this.resumes = options.resumes;
    this.$rootEl = $("#content");
  },

  routes: {
    "": "jobsLanding",
    "jobs": "jobsIndex",
    "resumes": "resumesLanding",
    "resumesIndex": "resumesIndex",
    "profile": "profile"
  },

  jobsLanding: function() {
    var view = new Indoge.Views.JobsLanding();
    this._swapView(view);
  },

  jobsIndex: function() {
    this.jobs.fetch({reset: true});
    var view = new Indoge.Views.JobsIndex({jobs: this.jobs});
    this._swapView(view);
  },

  resumesLanding: function() {
    var view = new Indoge.Views.ResumesLanding();
    this._swapView(view)
  },

  resumesIndex: function() {
    this.resumes.fetch({reset: true});
    var view = new Indoge.Views.ResumesIndex({resumes: this.resumes});
    this._swapView(view);
  },

  profile: function() {
    var current_user = new Indoge.Models.CurrentUser();
    current_user.fetch();
    var view = new Indoge.Views.Profile({user: current_user});
    this._swapView(view);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
