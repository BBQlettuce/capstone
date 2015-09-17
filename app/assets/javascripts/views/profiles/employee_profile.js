Indoge.Views.EmployeeProfile = Backbone.View.extend({
  template: JST['profiles/employee_profile'],

  className: 'todo',

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template({user: this.user}));
    return this;
  }

})
