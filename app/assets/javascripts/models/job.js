Indoge.Models.Job = Backbone.Model.extend({
  urlRoot: "/api/jobs"

  // parse: function(response) {
  //   if (response.poster) {
  //     this.poster().set(response.poster);
  //     delete response.poster;
  //   }
  //   return response;
  // },
  //
  // poster: function() {
  //   if (!this._poster) {
  //     this._poster = new Indoge.Collections.Jobs([]);
  //   }
  //   return this._postedJobs;
  // },
})
