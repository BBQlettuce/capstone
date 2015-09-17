Indoge.Models.CurrentUser = Backbone.Model.extend({
  url: '/api/currentuser',

  parse: function(response) {
    if (response.posted_jobs) {
      this.postedJobs().set(response.posted_jobs);
      delete response.posted_jobs;
    }
    if (response.resume) {
      this.resume().set(response.resume);
      delete response.resume;
    }
    return response;
  },

  postedJobs: function() {
    if (!this._postedJobs) {
      this._postedJobs = new Indoge.Collections.Jobs([]);
    }
    return this._postedJobs;
  },

  resume: function() {
    if (!this._resume) {
      this._resume = new Indoge.Models.Resume();
    }
    return this._resume;
  }

})
