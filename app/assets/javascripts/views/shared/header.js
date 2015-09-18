Indoge.Views.Header = Backbone.View.extend({
  template: JST["shared/header"],

  initialize: function() {
    this.listenTo(Indoge.currentUser, "sync", this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

})
