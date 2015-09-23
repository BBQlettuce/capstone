Indoge.Views.SearchBar = Backbone.View.extend({
  template: JST['shared/search_bar'],

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

    Indoge.jobSearchResults.query = what;
    Indoge.jobSearchResults.page = 1;

    Indoge.jobSearchResults.fetch({
      data: {
        what: what,
        page: 1}
    })
    Backbone.history.navigate("jobs", {trigger: true});
  },



})
