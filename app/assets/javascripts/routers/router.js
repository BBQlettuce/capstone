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
    "myprofile": "employeeProfile",
    "hire": "employerProfile",
    "job/new": "jobNew",
    "myresume": "resumeForm"
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

  employeeProfile: function() {
    var current_user = new Indoge.Models.CurrentUser();
    current_user.fetch();
    var view = new Indoge.Views.EmployeeProfile({user: current_user});
    this._swapView(view);
  },

  employerProfile: function() {
    var current_user = new Indoge.Models.CurrentUser();
    current_user.fetch();
    var view = new Indoge.Views.EmployerProfile({user: current_user});
    this._swapView(view);
  },

  jobNew: function() {
    var current_user = new Indoge.Models.CurrentUser();
    current_user.fetch();
    var newJob = new Indoge.Models.Job();
    var view = new Indoge.Views.JobNew({user: current_user, jobs: this.jobs, model: newJob});
    this._swapView(view);
  },

  jobEdit: function() {

  },
  
  resumeForm: function() {
    var current_user = new Indoge.Models.CurrentUser();
    current_user.fetch();
    var view = new Indoge.Views.ResumeNew({user: current_user});
    this._swapView(view);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
