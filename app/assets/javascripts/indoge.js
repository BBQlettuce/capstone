window.Indoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var jobs = Indoge.Collections.Jobs()
    new Indoge.Routers.Router({jobs: jobs});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Indoge.initialize();
});
