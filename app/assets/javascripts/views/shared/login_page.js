Indoge.Views.LoginPage = Backbone.View.extend({
  template: JST["shared/login_page"],

  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(Indoge.currentUser, "login", this.loginCallback);
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
  },

  // if some action was specified, like going to employer profile, then do that
  // otherwise redirect to jobs_landing
  loginCallback: function() {
    if (this.callback) {
      this.callback();
    }
    else {
      Backbone.history.navigate("", {trigger: true});
    }
  }
})
