Indoge.Views.JobsIndex = Backbone.View.extend({
  template: JST['jobs/jobs_index'],

  className: "todo",

  initialize: function(options) {
    this.jobs = options.jobs;
    this.listenTo(this.jobs, "sync add remove", this.render);
  },

  render: function() {
    this.$el.html(this.template({jobs: this.jobs}));
    return this;
  }

})
