Indoge.Views.JobsLanding = Backbone.View.extend({
  template: JST["jobs/jobs_landing"],

  className: "landing",

  events: {
    "click .find-button": "search"
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  // WILL BE OVERHAULED
  search: function(e) {
    e.preventDefault();
    var query = this.$("form").serializeJSON();
    var what = query.what;
    Indoge.jobSearchResults.fetch({
      data: {what: what}
    })
    // var searchResults = new Indoge.Collections.JobsSearch();
    // searchResults.fetch({
    //   data: {query: what}
    // });

    Backbone.history.navigate("jobs", {trigger: true});
  }
})
