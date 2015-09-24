Indoge.Views.Sidebar = Backbone.View.extend({
  template: JST["shared/sidebar"],

  events: {
    "click .filter": "filterResults"
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
  }

})
//
// <li><a class="filter" href="javascript:void(0)" data-min="5">5+ treats</a></li>
// <li><a class="filter" href="javascript:void(0)" data-min="10">10+ treats</a></li>
// <li><a class="filter" href="javascript:void(0)" data-min="15">15+ treats</a></li>
// <li><a class="filter" href="javascript:void(0)" data-min="20">20+ treats</a></li>
