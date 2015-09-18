Indoge.Collections.Jobs = Backbone.Collection.extend({
  url: "/api/jobs",
  model: Indoge.Models.Job,

  getOrFetch: function(id) {
    var jobs = this;
    var job = jobs.get(id);
    if (job) {
      job.fetch();
    }
    else {
      job = new this.model({id: id});
      jobs.add(job);
      job.fetch({
        error: function() {
          jobs.remove(job)
        }
      })
    }
    return job;
  }

})
