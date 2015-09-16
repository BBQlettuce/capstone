Indoge.Models.CurrentUser = Backbone.Model.extend({
  url: '/api/currentuser',

  parse: function(response) {
    if (response.jobs) {
      this.jobs().set(response.jobs);
      delete response.jobs;
    }
    if (response.resume) {
      this.resume().set(response.resume);
      delete response.resume;
    }
    return response;
  },

  jobs: function() {
    if (!this._jobs) {
      this._jobs = new Indoge.Collections.Jobs([]);
    }
    return this._jobs;
  },

  resume: function() {
    if (!this._resume) {
      this._resume = new Indoge.Models.Resume();
    }
    return this._resume;
  }

})
