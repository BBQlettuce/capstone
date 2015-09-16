window.Indoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Indoge.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Indoge.initialize();
});
