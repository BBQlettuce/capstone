Indoge.Views.Header = Backbone.View.extend({
  template: JST["header"],

  // initialize: function() {
  //   debugger;
  // },

  tagName: "header",
  className: "group",

  render: function() {
    this.$el.html(this.template());
    return this;
  }

})
