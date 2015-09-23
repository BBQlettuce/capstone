Indoge.Views.ResumesLanding = Backbone.CompositeView.extend({
  template: JST["resumes/resumes_landing"],

  className: "landing",

  initialize: function() {
    this.addSearchbar();
  },

  render: function() {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addSearchbar: function() {
    var subview = new Indoge.Views.ResumeSearchBar();
    this.addSubview(".search-bar", subview);
  }

  // WILL BE OVERHAULED
  // search: function(e) {
  //   e.preventDefault();
  //   Backbone.history.navigate("resumes/search", {trigger: true});
  // }

})
