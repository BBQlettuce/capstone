Indoge.Views.Header = Backbone.View.extend({
  template: JST["shared/header"],

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

})
