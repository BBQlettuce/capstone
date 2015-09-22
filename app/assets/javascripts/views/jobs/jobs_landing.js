Indoge.Views.JobsLanding = Backbone.CompositeView.extend({
  template: JST["jobs/jobs_landing"],

  className: "landing",

  initialize: function () {
    this.addSearchbar();
  },

  render: function() {
    this.$el.html(this.template);
    this.attachSubviews();
    return this;
  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  }
  
})
