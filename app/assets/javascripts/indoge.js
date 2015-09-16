window.Indoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var jobs = new Indoge.Collections.Jobs();
    var resumes = new Indoge.Collections.Resumes();
    new Indoge.Routers.Router({jobs: jobs, resumes: resumes});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Indoge.initialize();
});
