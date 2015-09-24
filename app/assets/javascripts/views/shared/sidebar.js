Indoge.Views.Sidebar = Backbone.View.extend({
  template: JST["shared/sidebar"],

  events: {
    "click .filter": "filterResults",
    "click .clear-filter": "clearFilter"
  },

  initialize: function() {
    this.listenTo(Indoge.jobSearchResults, "sync", this.render);
  },

  render: function() {
    this._min = this._min || 0;
    this.$el.html(this.template({min: this._min}));
    return this;
  },

  filterResults: function(e) {
    e.preventDefault;
    var min = $(e.currentTarget).data("min");
    var results = Indoge.jobSearchResults;
    results.fetch({
      data: {
        what: results.query,
        page: 1,
        min_salary: min
      },
      success: function() {
        Indoge.jobSearchResults.page = 1;
        this._min = min;
      }.bind(this)
    })
  },

  clearFilter: function(e) {
    e.preventDefault();
    if (!this._min) {
      return
    }
    var results = Indoge.jobSearchResults;
    results.fetch({
      data: {
        what: results.query,
        page: 1
      },
      success: function() {
        Indoge.jobSearchResults.page = 1;
        this._min = 0;
      }.bind(this)
    })
  }

})
