Indoge.Views.JobForm = Backbone.View.extend({
  template: JST["jobs/job_form"],

  className: "new-job-page",

  events: {
    "click button" : "submit"
  },

  initialize: function(options) {
    this.user = options.user;
    this.jobs = options.jobs;

    this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    // this.$el.empty();
    // this.$el.append(this.template({job: this.model, user: this.user}));
    this.$el.html(this.template({job: this.model, user: this.user}))
    return this;
  },

  submit: function(e) {
    e.preventDefault();
    var data = this.$("form").serializeJSON();
    this.model.set(data);
    this.model.save({}, {
      success: function() {
        this.jobs.add(this.model);
        Backbone.history.navigate("hire", {trigger: true});
      }.bind(this),
      error: function() {
        alert("must have title and description");
      }
    })
  }
})
