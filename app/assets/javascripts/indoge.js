window.Indoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var jobs = new Indoge.Collections.Jobs();
    var resumes = new Indoge.Collections.Resumes();
    this.currentUser = new Indoge.Models.CurrentUser();
    this.currentUser.fetch();

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
