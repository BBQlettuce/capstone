Indoge.Views.LoginPage = Backbone.View.extend({
  template: JST["shared/login_page"],

  initialize: function() {

  },

  events: {
    "submit form": "login"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  login: function(e) {
    e.preventDefault();
  }
})
