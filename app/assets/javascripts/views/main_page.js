Indoge.Views.MainPage = Backbone.View.extend({
  template: JST['main_page'],

  className: "todo",
  
  render: function() {
    this.$el.html(this.template);
    return this;
  }
})
