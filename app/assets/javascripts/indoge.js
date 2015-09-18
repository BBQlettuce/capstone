window.Indoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var jobs = new Indoge.Collections.Jobs();
    var resumes = new Indoge.Collections.Resumes();
    this.header = new Indoge.Views.Header({el: "#header"});
    new Indoge.Routers.Router({
      jobs: jobs,
      resumes: resumes,
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Indoge.initialize();
});
