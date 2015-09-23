Indoge.Views.ResumesSearch = Backbone.CompositeView.extend({
  template: JST["resumes/resumes_search"],

  className: "content",

  events: {
    "click .prev-page" : "prevPage",
    "click .next-page" : "nextPage",
    "click .page-link" : "goToPage"
  },

  initialize: function(options) {
    this.resumes = options.resumes;
    this.listenTo(this.resumes, "sync", this.render);
    this.listenTo(this.resumes, "add", this.addResumeView);
    this.listenTo(this.resumes, "remove", this.removeResumeView);

    this.addSearchbar();
    this.resumes.each(this.addResumeView.bind(this));
  },

  render: function() {
    this.$el.html(this.template({resumes: this.resumes}));
    this.attachSubviews();
    return this;
  },

  addResumeView: function(resume) {
    var subview = new Indoge.Views.ResumeMiniShow({model: resume});
    this.addSubview(".resumes-list", subview);
  },

  removeResumeView: function(job) {
    this.removeModelSubview(".resumes-list", job)
  },

  addSidebar: function() {

  },

  addSearchbar: function() {
    var subview = new Indoge.Views.ResumeSearchBar();
    this.addSubview(".search-bar", subview);
  },

  prevPage: function(e) {
    e.preventDefault();
    this.resumes.fetch({
      data: {
        what: this.resumes.query,
        page: this.resumes.page - 1
      },
      success: function() {
        if (this.resumes.page > 1) {
          this.resumes.page --;
        }
      }.bind(this)
    })
  },

  nextPage: function(e) {
    e.preventDefault();
    this.resumes.fetch({
      data: {
        what: this.resumes.query,
        page: this.resumes.page + 1
      },
      success: function() {
        if (this.resumes.page < this.resumes.numPages) {
          this.resumes.page ++;
        }
      }.bind(this)
    })
  },

  goToPage: function(e) {
    e.preventDefault();
    var pageNum = Number($(e.currentTarget).find("a").html());
    this.resumes.fetch({
      data: {
        what: this.resumes.query,
        page: pageNum
      },
      success: function() {
        this.resumes.page = pageNum;
      }.bind(this)
    })
  }
})
