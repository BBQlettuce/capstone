Indoge.Views.JobsSearch = Backbone.CompositeView.extend({
  template: JST["jobs/jobs_search"],

  className: "content",

  initialize: function(options) {
    this.jobs = options.jobs;
    this.listenTo(this.jobs, "sync remove", this.render);
    this.listenTo(this.jobs, "add", this.addJobView);

    this.addSearchbar();
    this.jobs.each(this.addJobView.bind(this));
  },

  render: function() {
    this.$el.html(this.template({jobs: this.jobs}));
    this.attachSubviews();
    return this;
  },

  addJobView: function(job) {
    var subview = new Indoge.Views.JobMiniShow({job: job});
    this.addSubview(".jobs-list", subview);
  },

  addSidebar: function() {

  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  }
})
