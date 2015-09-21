Indoge.Views.EmployeeProfile = Backbone.CompositeView.extend({
  template: JST["profiles/employee_profile"],

  className: "content",

  initialize: function(options) {
    this.user = options.user;
    this.savedJobs = this.user.savedJobs();

    this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.savedJobs, "remove", this.removeSavedJobView);
    this.listenTo(this.savedJobs, "add", this.addSavedJobView);

    this.addSearchbar();
    this.savedJobs.each(this.addSavedJobView.bind(this));
  },

  render: function() {
    this.$el.html(this.template({user: this.user}));
    this.attachSubviews();
    return this;
  },

  addSavedJobView: function(job) {
    var subview = new Indoge.Views.JobMiniShow({job: job});
    this.addSubview(".saved-jobs-list", subview)
  },

  removeSavedJobView: function(job) {
    this.removeModelSubview(".saved-jobs-list", job)
  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  }

})
