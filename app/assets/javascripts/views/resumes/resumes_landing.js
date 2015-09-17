Indoge.Views.ResumesLanding = Backbone.View.extend({
  template: JST["resumes/resumes_landing"],

  className: "todo",

  render: function() {
    this.$el.html(this.template());
    return this;
  }

})
