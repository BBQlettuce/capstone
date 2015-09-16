Indoge.Views.JobsIndex = Backbone.View.extend({
  template: JST['jobs_index'],

  initialize: function(options) {
    this.jobs = options.jobs;
    this.listenTo(this.jobs, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({jobs: this.jobs}));
    return this;
  }

})
