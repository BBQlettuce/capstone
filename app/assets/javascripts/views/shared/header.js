Indoge.Views.Header = Backbone.View.extend({
  template: JST["shared/header"],

  events: {
    "click #signout": "signout"
  },

  initialize: function() {
    this.listenTo(Indoge.currentUser, "signin signout", this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  signout: function() {
    Indoge.currentUser.signout();
  }

})
