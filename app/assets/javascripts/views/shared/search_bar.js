Indoge.Views.SearchBar = Backbone.View.extend({
  template: JST['shared/search_bar'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

})
