Indoge.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.jobs = options.jobs;
    this.resumes = options.resumes;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "jobsLanding",
    "signin": "signin",
    "signup": "signup",
    "jobs": "jobsSearch",
    "jobs/new": "jobNew",
    "jobs/:id": "jobShow",
    "resumes": "resumesLanding",
    "resumes/search": "resumesSearch",
    "resumes/:id": "resumeShow",
    "myprofile": "employeeProfile",
    "hire": "employerProfile",
    "myresume": "resumeForm"
  },

  signin: function(callback) {
    if (!this._requireSignedOut(callback)) {
      return;
    }
    var view = new Indoge.Views.SigninPage({callback: callback});
    this._swapView(view);
  },

  signup: function() {
    if (!this._requireSignedOut()) {
      return;
    };
    var view = new Indoge.Views.SignupPage();
    this._swapView(view);
  },

  jobsLanding: function() {
    var view = new Indoge.Views.JobsLanding();
    this._swapView(view);
  },

  jobsSearch: function() {
    var view = new Indoge.Views.JobsSearch({jobs: Indoge.jobSearchResults});
    this._swapView(view);
  },

  resumesLanding: function() {
    var view = new Indoge.Views.ResumesLanding();
    this._swapView(view)
  },

  resumesSearch: function() {
    var view = new Indoge.Views.ResumesSearch({resumes: Indoge.resumeSearchResults});
    this._swapView(view);
  },

  employeeProfile: function() {
    var callback = this.employeeProfile.bind(this);
    if (!this._requireSignedIn(callback)) {
      return;
    };
    Indoge.currentUser.fetch();
    var view = new Indoge.Views.EmployeeProfile({user: Indoge.currentUser});
    this._swapView(view);
  },

  employerProfile: function() {
    var callback = this.employerProfile.bind(this);
    if (!this._requireSignedIn(callback)) {
      return;
    };
    Indoge.currentUser.fetch();
    var view = new Indoge.Views.EmployerProfile({user: Indoge.currentUser});
    this._swapView(view);
  },

  jobNew: function() {
    var callback = this.jobNew.bind(this);
    if (!this._requireSignedIn(callback)) {
      return;
    };
    var newJob = new Indoge.Models.Job();
    Indoge.currentUser.fetch();
    var view = new Indoge.Views.JobNew({user: Indoge.currentUser, jobs: this.jobs, model: newJob});
    this._swapView(view);
  },

  jobShow: function(id) {
    var job = this.jobs.getOrFetch(id);
    var view = new Indoge.Views.JobShow({model: job});
    this._swapView(view);
  },

  resumeForm: function() {
    var callback = this.resumeForm.bind(this);
    if (!this._requireSignedIn(callback)) {
      return;
    };
    Indoge.currentUser.fetch();
    var view = new Indoge.Views.ResumeForm({user: Indoge.currentUser});
    this._swapView(view);
  },

  resumeShow: function(id) {
    var resume = this.resumes.getOrFetch(id);
    var view = new Indoge.Views.ResumeShow({model: resume});
    this._swapView(view);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el);
  },

  _requireSignedIn: function(callback) {
    if (!Indoge.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signin(callback);
      return false;
    }
    return true;
  },

  _requireSignedOut: function(callback) {
    if (Indoge.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }
    return true;
  },

  _goHome: function() {
    Backbone.history.navigate("#", { trigger: true });
  }

})
