Indoge.Views.ResumeSearchBar = Backbone.View.extend({
  template: JST['shared/resume_search_bar'],

  events: {
    "click .find-button": "search"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  search: function(e) {
    e.preventDefault();
    var query = this.$("form").serializeJSON();
    var what = query.what;

    Indoge.resumeSearchResults.query = what;
    Indoge.resumeSearchResults.page = 1;

    Indoge.resumeSearchResults.fetch({
      data: {
        what: what,
        page: 1}
    })
    Backbone.history.navigate("resumes/search", {trigger: true});
  },



})
