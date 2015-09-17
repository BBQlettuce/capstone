Indoge.Views.EmployerProfile = Backbone.View.extend({
  template: JST['profiles/employer_profile'],

  className: 'todo',

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

})
