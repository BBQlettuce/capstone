Indoge.Views.ResumesLanding = Backbone.View.extend({
  template: JST["resumes/resumes_landing"],

  className: "landing",

  events: {
    "click .find-button": "search"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  // WILL BE OVERHAULED
  search: function(e) {
    e.preventDefault();
    Backbone.history.navigate("resumes/search", {trigger: true});
  }

})
