Indoge.Views.JobsSearch = Backbone.CompositeView.extend({
  template: JST["jobs/jobs_search"],

  className: "content",

  events: {
    "click .prev-page" : "prevPage",
    "click .next-page" : "nextPage"
  },

  initialize: function(options) {
    this.jobs = options.jobs;
    this.listenTo(this.jobs, "sync", this.render);
    this.listenTo(this.jobs, "add", this.addJobView);
    this.listenTo(this.jobs, "remove", this.removeJobView);

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

  removeJobView: function(job) {
    this.removeModelSubview(".jobs-list", job)
  },

  addSidebar: function() {

  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  },

  prevPage: function(e) {
    e.preventDefault();
    if (Indoge.jobSearchResults.page <= 1) {
      alert("can't go any more previous");
      return;
    }
    Indoge.jobSearchResults.fetch({
      data: {
        what: Indoge.jobSearchResults.query,
        page: Indoge.jobSearchResults.page - 1
      },
      success: function() {
        if (Indoge.jobSearchResults.page > 1) {
          Indoge.jobSearchResults.page --;
        }
      }
    })
  },

  nextPage: function(e) {
    e.preventDefault();
    if (Indoge.jobSearchResults.page === Indoge.jobSearchResults.numPages) {
      alert("can't go any further");
      return
    }
    Indoge.jobSearchResults.fetch({
      data: {
        what: Indoge.jobSearchResults.query,
        page: Indoge.jobSearchResults.page + 1
      },
      success: function() {
        Indoge.jobSearchResults.page ++;
      }
    })
  }
})
