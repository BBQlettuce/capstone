Indoge.Views.EmployerProfile = Backbone.CompositeView.extend({
  template: JST["profiles/employer_profile"],

  className: "content",

  initialize: function(options) {
    this.user = options.user;
    this.postedJobs = this.user.postedJobs();

    this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.postedJobs, "remove", this.removePostedJobView);
    this.listenTo(this.postedJobs, "add", this.addPostedJobView);

    this.addSearchbar();
    this.postedJobs.each(this.addPostedJobView.bind(this));
  },

  render: function() {
    this.$el.html(this.template({user: this.user}));
    this.attachSubviews();
    return this;
  },

  addPostedJobView: function(job) {
    var subview = new Indoge.Views.JobMiniShow({job: job});
    this.addSubview(".posted-jobs-list", subview)
  },

  removePostedJobView: function(job) {
    this.removeModelSubview(".posted-jobs-list", job)
  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  }

})
