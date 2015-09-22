Indoge.Views.ResumesIndex = Backbone.View.extend({
  template: JST["resumes/resumes_index"],

  className: "content",

  initialize: function(options) {
    this.resumes = options.resumes;
    this.listenTo(this.resumes, "sync add remove", this.render);
  },

  render: function() {
    this.$el.html(this.template({resumes: this.resumes}));
    return this;
  }

})
