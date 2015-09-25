Indoge.Views.JobsLanding = Backbone.CompositeView.extend({
  template: JST["jobs/jobs_landing"],

  className: "landing",

  events: {
    "click .guest-login": "guestLogin"
  },

  initialize: function () {
    this.addSearchbar();
    this.listenTo(Indoge.currentUser, "change", this.render)
  },

  render: function() {
    this.$el.html(this.template);
    this.attachSubviews();
    return this;
  },

  addSearchbar: function() {
    var subview = new Indoge.Views.SearchBar();
    this.addSubview(".search-bar", subview);
  },

  guestLogin: function(e) {
    e.preventDefault();
    Indoge.currentUser.signin({
      email: "lonelydoge@doge.com",
      password: "password",
      success: function() {
        Backbone.history.navigate("#", {trigger:true})
      },
      error: function() {
        alert("wrong email and password combo");
      }
    });
  }

})
