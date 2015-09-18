Indoge.Views.SignupPage = Backbone.View.extend({
  template: JST["shared/signup_page"],

  initialize: function() {
    debugger
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }


})
