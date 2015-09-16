Indoge.Views.Profile = Backbone.View.extend({
  hoomin_template: JST['profile/hoomin_profile'],
  doge_template: JST['profile/doge_profile'],

  className: 'todo',

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.hoomin_template());
    return this;
  }

})
