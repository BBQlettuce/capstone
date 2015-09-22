Indoge.Views.JobsSearch = Backbone.CompositeView.extend({
  template: JST["jobs/jobs_search"],

  className: "content",

  events: {
    "click .prev-page" : "prevPage",
    "click .next-page" : "nextPage"
  },

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
    var subview = new Indoge.Views.JobMiniShow({model: job});
    this.addSubview(".jobs-list", subview);
  },

  addSidebar: function() {

  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  },

  prevPage: function(e) {
    e.preventDefault();
    Indoge.jobSearchResults.currentPage() --;
    Indoge.jobSearchResults.fetch({
      data: {
        what: Indoge.jobSearchResults.currentQuery(),
        page: Indoge.jobSearchResults.currentPage()}
    })
  },

  nextPage: function(e) {
    e.preventDefault();
    Indoge.jobSearchResults.currentPage() ++;
    Indoge.jobSearchResults.fetch({
      data: {
        what: Indoge.jobSearchResults.currentQuery(),
        page: Indoge.jobSearchResults.currentPage()}
    })
  }
})
