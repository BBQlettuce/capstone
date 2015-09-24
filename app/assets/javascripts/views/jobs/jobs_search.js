Indoge.Views.JobsSearch = Backbone.CompositeView.extend({
  template: JST["jobs/jobs_search"],

  className: "content",

  events: {
    "click .prev-page" : "prevPage",
    "click .next-page" : "nextPage",
    "click .page-link" : "goToPage"
  },

  initialize: function(options) {
    this.jobs = options.jobs;
    this.listenTo(this.jobs, "sync", this.render);
    this.listenTo(this.jobs, "add", this.addJobView);
    this.listenTo(this.jobs, "remove", this.removeJobView);

    this.addSearchbar();
    this.addSidebar();
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
    var subview = new Indoge.Views.Sidebar();
    this.addSubview(".sidebar", subview);
  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  },

  prevPage: function(e) {
    e.preventDefault();
    this.jobs.fetch({
      data: {
        what: this.jobs.query,
        page: this.jobs.page - 1
      },
      success: function() {
        if (this.jobs.page > 1) {
          this.jobs.page --;
        }
      }.bind(this)
    })
  },

  nextPage: function(e) {
    e.preventDefault();
    this.jobs.fetch({
      data: {
        what: this.jobs.query,
        page: this.jobs.page + 1
      },
      success: function() {
        if (this.jobs.page < this.jobs.numPages) {
          this.jobs.page ++;
        }
      }.bind(this)
    })
  },

  goToPage: function(e) {
    e.preventDefault();
    var pageNum = Number($(e.currentTarget).find("a").html());
    this.jobs.fetch({
      data: {
        what: this.jobs.query,
        page: pageNum
      },
      success: function() {
        this.jobs.page = pageNum;
      }.bind(this)
    })
  }
})
