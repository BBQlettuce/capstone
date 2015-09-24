Indoge.Views.Sidebar = Backbone.View.extend({
  template: JST["shared/sidebar"],

  initialize: function() {
    this.listenTo(Indoge.jobSearchResults, "sync", this.render);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }


})
