Indoge.Views.MainPage = Backbone.View.extend({
  template: JST['main_page'],

  render: function() {
    this.$el.html(this.template);
    return this;
  }
})
