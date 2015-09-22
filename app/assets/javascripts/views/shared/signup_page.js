Indoge.Views.SignupPage = Backbone.View.extend({
  template: JST["shared/signup_page"],

  className: "signup",

  events: {
    "submit form": "signup"
  },

  initialize: function() {
    // this.listenTo(Indoge.currentUser, "sync", this.dosomething);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  signup: function(e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    var newUser = new Indoge.Models.User(data);
    // debugger
    newUser.save({}, {
      success: function() {
        Indoge.currentUser.fetch();
        Backbone.history.navigate("#", {trigger: true})
      },
      error: function() {
        alert("you fucked up");
      }
    })
    console.log(newUser);
  }


})
